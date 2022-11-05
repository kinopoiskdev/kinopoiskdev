export const ToWhere = <TQuery, TWhere>(query: TQuery): TWhere => {
  const where = {} as TWhere;
  Object.keys(query).forEach((key) => {
    if (typeof query[key] === 'object') {
      if (Array.isArray(query[key])) {
        where[key] = {
          in: query[key],
        };
      } else {
        where[key] = {
          is: ToWhere(query[key]),
        };
      }
    } else {
      where[key] = {
        equals: query[key],
      };
    }
  });

  return where;
};
