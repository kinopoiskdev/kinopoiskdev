/* eslint-disable @typescript-eslint/ban-types*/
import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { validate, ValidationError } from 'class-validator';
import { plainToInstance } from 'class-transformer';
import { RemoveArrayBrackets } from '@common/utils';
import { iterate } from 'iterare';

type Filters = {
  field?: string[];
  search?: string[];
  sortField?: string[];
  sortType?: string[];
  [key: string]: any;
};

@Injectable()
export class ParseDotNotationQuery<I = Filters>
  implements PipeTransform<I, any>
{
  async transform(value: I, { metatype }: ArgumentMetadata): Promise<any> {
    if (!metatype || !this.toValidate(metatype)) return value;

    const payload = this.transformDotNotationQuery(value);

    const object = plainToInstance(metatype, payload);
    const errors = await validate(object);
    // TODO: Переделать на кастомный класс ошибки
    if (errors.length > 0) {
      throw new BadRequestException(this.flattenValidationErrors(errors));
    }
    return object;
  }

  private transformDotNotationQuery(query: Filters): any {
    if (typeof query !== 'object' || !query) return query;
    query = RemoveArrayBrackets(query);
    const { field, search, sortField, sortType, ...params } = query;

    const queryObj = this.parseDotNotationObj(field, search);
    const sortObj = this.parseDotNotationObj(sortField, sortType);
    return { query: queryObj, sort: sortObj, ...params };
  }

  // Парсинг dot notation строки "parentKey.key" в объект { parentKey: { key: value } } с присвоением значение value из search
  private parseDotNotationObj(fields: string[], values: string[]): any {
    if (!fields || !values) return {};
    const payload = {};
    fields.forEach((field, index) => {
      const value = values[index];
      field.split('.').reduce((acc, key, i, arr) => {
        if (i === arr.length - 1) acc[key] = value;
        else acc[key] = {};
        return acc[key];
      }, payload);
    });
    return payload;
  }

  private toValidate(metatype: Function): boolean {
    const types: Function[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }

  protected mapChildrenToValidationErrors(
    error: ValidationError,
    parentPath?: string
  ): ValidationError[] {
    if (!(error.children && error.children.length)) {
      return [error];
    }
    const validationErrors = [];
    parentPath = parentPath
      ? `${parentPath}.${error.property}`
      : error.property;
    for (const item of error.children) {
      if (item.children && item.children.length) {
        validationErrors.push(
          ...this.mapChildrenToValidationErrors(item, parentPath)
        );
      }
      validationErrors.push(
        this.prependConstraintsWithParentProp(parentPath, item)
      );
    }
    return validationErrors;
  }

  protected prependConstraintsWithParentProp(
    parentPath: string,
    error: ValidationError
  ): ValidationError {
    const constraints = {};
    for (const key in error.constraints) {
      constraints[key] = `${parentPath}.${error.constraints[key]}`;
    }
    return {
      ...error,
      constraints,
    };
  }

  protected flattenValidationErrors(
    validationErrors: ValidationError[]
  ): string[] {
    return iterate(validationErrors)
      .map((error) => this.mapChildrenToValidationErrors(error))
      .flatten()
      .filter((item) => !!item.constraints)
      .map((item) => Object.values(item.constraints))
      .flatten()
      .toArray();
  }
}
