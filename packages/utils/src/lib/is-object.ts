export const isObject = (value: unknown): value is Record<any, any> =>
  Object.prototype.toString.call(value) === '[object Object]';
