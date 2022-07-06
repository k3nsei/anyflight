import { createContext } from 'react';

import type { AnyflightUiTheme } from '../../providers';
import { defaultTheme } from '../../themes';

export const AnyflightUiThemeContext = createContext<AnyflightUiTheme>(defaultTheme);

AnyflightUiThemeContext.displayName = 'AnyflightUiThemeContext';
