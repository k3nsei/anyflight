import { createContext } from 'react';

import { defaultTheme } from '../../themes';
import type { AnyflightTheme } from './theme.type';

/** @internal */
export const AnyflightThemeContext = createContext<AnyflightTheme>(defaultTheme);

AnyflightThemeContext.displayName = 'AnyflightThemeContext';

/** @internal */
export const AnyflightThemeNestLevelContext = createContext<number>(0);

AnyflightThemeNestLevelContext.displayName = 'AnyflightThemeNestLevelContext';
