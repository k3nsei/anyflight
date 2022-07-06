export const isNumber = (value: unknown): value is number =>
  typeof value === 'number' && Object.prototype.toString.call(value) === '[object Number]';
