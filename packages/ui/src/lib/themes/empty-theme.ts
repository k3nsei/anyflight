import type { AnyflightTheme } from '../providers';

/**
 * Used only for memoize purposes, to not generate new theme object with each render
 * @internal
 */
export const emptyTheme = Object.freeze({}) as AnyflightTheme;
