/** @jsxImportSource @emotion/react */
import { ThemeProvider as EmotionThemeProvider, Global } from '@emotion/react';
import type { ReactNode } from 'react';
import { useMemo } from 'react';

import { PartialDeep, merge } from '@anyflight/utils';

import { useAnyflightUiTheme } from '../../hooks';
import {
  AnyflightUiThemeContext,
  AnyflightUiThemeNestLevelProvider,
  useAnyflightUiStyles,
  useAnyflightUiThemeNestLevel,
} from '../../internals';
import { resetStyles, themeStyles, utilityStyles } from './global.styles';
import type { AnyflightUiTheme } from './theme.type';

/**
 * Used only for memoize purposes, to not generate new theme object with each render
 */
export const emptyTheme = Object.freeze({}) as AnyflightUiTheme;

export interface ThemeProviderProps {
  theme?: PartialDeep<AnyflightUiTheme>;
  children?: ReactNode;
}

export const AnyflightUiThemeProvider = ({ theme = emptyTheme, children }: ThemeProviderProps) => {
  const originTheme = useAnyflightUiTheme();
  const nestLevel = useAnyflightUiThemeNestLevel();

  const value = useMemo(() => merge({}, originTheme, theme), [originTheme, theme]);

  const applyStyles = useAnyflightUiStyles({ theme: value });

  return (
    <AnyflightUiThemeNestLevelProvider nestLevel={nestLevel + 1}>
      <AnyflightUiThemeContext.Provider value={value}>
        <EmotionThemeProvider theme={value}>
          {nestLevel === 0 && <Global styles={applyStyles([resetStyles, themeStyles, utilityStyles])} />}
          {children}
        </EmotionThemeProvider>
      </AnyflightUiThemeContext.Provider>
    </AnyflightUiThemeNestLevelProvider>
  );
};

AnyflightUiThemeProvider.displayName = 'AnyflightUiThemeProvider';
