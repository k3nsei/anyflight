import { isNumber } from './is-number';
import { isString } from './is-string';
import { CSSUnit } from './types';

export const toCssUnit = (value: CSSUnit): Exclude<CSSUnit, number> => {
  return isNumber(value) ? `${value}px` : isString(value) ? value : `0px`;
};
