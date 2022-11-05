/* eslint-disable @typescript-eslint/ban-types*/

import { applyDecorators } from '@nestjs/common';
import { ApiQuery } from '@nestjs/swagger';

const getPagingDecorators = (fn: Function) => {
  const constructor = fn.prototype;
  const properties = Reflect.getMetadata(
    'swagger/apiModelPropertiesArray',
    constructor
  ).map((prop) => prop.substr(1));

  return properties.flatMap((property) => {
    const meta = Reflect.getMetadata(
      'swagger/apiModelProperties',
      constructor,
      property
    );
    const subClass = meta.type();
    if (subClass) {
      return getPagingDecorators(subClass);
    }
    return [
      ApiQuery({
        name: property,
        type: typeof subClass,
        ...meta,
      }),
    ];
  });
};

const getQueryDecorators = (fn: Function) => {
  const constructor = fn.prototype;
  const properties = Reflect.getMetadata(
    'swagger/apiModelPropertiesArray',
    constructor
  ).map((prop) => prop.substr(1));

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
    }),
    ApiQuery({
      name: 'search',
      required: false,
      description: 'Значения полей',
      isArray: true,
      type: 'string',
    }),
  ];
};

export const ApiDotNotationQuery = (query: Function, pagination?: Function) => {
  let decorators = getQueryDecorators(query);
  if (pagination)
    decorators = decorators.concat(getPagingDecorators(pagination));
  return applyDecorators(...decorators);
};
//
//
// /* eslint-disable @typescript-eslint/ban-types*/
//
// import { applyDecorators } from '@nestjs/common';
// import { ApiQuery } from '@nestjs/swagger';
//
// const getConstructor = (fn: Function) => fn.prototype;
// const getProperties = (fn: Function): any => {
//   return Reflect.getMetadata(
//     'swagger/apiModelPropertiesArray',
//     getConstructor(fn)
//   ).map((prop) => prop.substr(1));
// };
//
// const getQueryDecorators = (fn: Function) => {
//   const constructor = getConstructor(fn);
//   const properties = getProperties(fn);
//   // Рекурсивно обходим все свойства класса и собираем dot notation для каждого свойства в массив fields и массив search
//   const field = properties.flatMap((property) => {
//     const meta = Reflect.getMetadata(
//       'swagger/apiModelProperties',
//       constructor,
//       property
//     );
//
//     if (typeof meta.type !== 'function') return [property];
//     const subClass = meta.type();
//
//     if (typeof subClass === 'function') {
//       const subClassProperties = Reflect.getMetadata(
//         'swagger/apiModelPropertiesArray',
//         subClass.prototype
//       ).map((prop) => prop.substr(1));
//
//       return subClassProperties.map((subClassProperty) => {
//         return `${property}.${subClassProperty}`;
//       });
//     } else {
//       return [property];
//     }
//   });
//
//   return [
//     ApiQuery({
//       name: 'field',
//       required: false,
//       description: 'Поля для выборки',
//       isArray: true,
//       enum: field,
//       schema: {
//         type: 'array',
//       },
//     }),
//     ApiQuery({
//       name: 'search',
//       required: false,
//       description: 'Значения полей',
//       type: 'string',
//       schema: {
//         type: 'array',
//       },
//     }),
//   ];
// };
//
// const getDecorators = (fn: Function) => {
//   const decorators = [];
//   const properties = getProperties(fn);
//
//   for (const property of properties) {
//     const meta = Reflect.getMetadata(
//       'swagger/apiModelProperties',
//       getConstructor(fn),
//       property
//     );
//     const subClass = meta.type();
//
//     switch (property) {
//       case 'query':
//         // Передать в getQueryDecorators класс, который описывает поля для выборки
//         decorators.push(...getQueryDecorators(subClass));
//         break;
//       default:
//         break;
//     }
//   }
//   return decorators;
// };
//
// export const ApiDotNotationQuery = (dto: Function) => {
//   const decorators = getDecorators(dto);
//   return applyDecorators(...decorators);
// };
