import { isString } from './is-string';

export const strip = (value: string): string => {
  if (!isString(value)) {
    return value;
  }

  return value.replace(/\s+/g, '');
};
