import { applyDecorators } from '@nestjs/common';
import { ApiQuery } from '@nestjs/swagger';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/ban-types
function getDecorators(fn: Function) {
  const constructor = fn.prototype;
  const properties = Reflect.getMetadata(
    'swagger/apiModelPropertiesArray',
    constructor
  ).map((prop) => prop.substr(1));

  // Рекурсивно обходим все свойства класса и собираем dot notation для каждого свойства в массив fields и массив search
  const field = properties.flatMap((property) => {
    const meta = Reflect.getMetadata(
      'swagger/apiModelProperties',
      constructor,
      property
    );

    if (typeof meta.type !== 'function') return [property];
    const subClass = meta.type();

    if (typeof subClass === 'function') {
      const subClassProperties = Reflect.getMetadata(
        'swagger/apiModelPropertiesArray',
        subClass.prototype
      ).map((prop) => prop.substr(1));

      return subClassProperties.map((subClassProperty) => {
        return `${property}.${subClassProperty}`;
      });
    } else {
      return [property];
    }
  });

  return [
    ApiQuery({
      name: 'field',
      required: false,
      description: 'Поля для выборки',
      isArray: true,
      enum: field,
      schema: {
        type: 'array',
      },
    }),
    ApiQuery({
      name: 'search',
      required: false,
      description: 'Значения полей',
      type: 'string',
      schema: {
        type: 'array',
      },
    }),
  ];
}

// eslint-disable-next-line @typescript-eslint/ban-types,@typescript-eslint/explicit-function-return-type
export function ApiDotNotationQuery(query: Function) {
  const decorators = getDecorators(query);
  return applyDecorators(...decorators);
}
