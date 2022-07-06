/** @jsxImportSource @emotion/react */
import { ThemeProvider as EmotionThemeProvider, Global } from '@emotion/react';
import type { ReactNode } from 'react';
import { useMemo } from 'react';

import { PartialDeep, merge } from '@anyflight/utils';

import { useAnyflightTheme } from '../../hooks';
import { useAnyflightThemeNestLevel } from '../../hooks/use-theme-nest-level';
import { emptyTheme } from '../../themes/empty-theme';
import { globalStyles } from './global.styles';
import { AnyflightThemeContext, AnyflightThemeNestLevelContext } from './theme.context';
import type { AnyflightTheme } from './theme.type';

interface ThemeProviderProps {
  theme?: PartialDeep<AnyflightTheme>;
  children?: ReactNode;
}

export const AnyflightThemeProvider = ({ theme = emptyTheme, children }: ThemeProviderProps) => {
  const originTheme = useAnyflightTheme();
  const themeNestLevel = useAnyflightThemeNestLevel();

  const value = useMemo(() => merge({}, originTheme, theme), [originTheme, theme]);

  return (
    <AnyflightThemeNestLevelContext.Provider value={themeNestLevel + 1}>
      <AnyflightThemeContext.Provider value={value}>
        <EmotionThemeProvider theme={value}>
          {themeNestLevel === 0 && <Global styles={globalStyles} />}
          {children}
        </EmotionThemeProvider>
      </AnyflightThemeContext.Provider>
    </AnyflightThemeNestLevelContext.Provider>
  );
};

AnyflightThemeProvider.displayName = 'AnyflightThemeProvider';
