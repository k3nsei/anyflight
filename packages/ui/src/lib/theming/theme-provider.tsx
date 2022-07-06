/** @jsxImportSource @emotion/react */
import { ThemeProvider as EmotionThemeProvider, Global } from '@emotion/react';
import { merge } from 'lodash-es';
import type { ReactNode } from 'react';

import { defaultTheme } from './default-theme';
import { globalStyles } from './global.styles';
import type { Theme } from './theme';

interface ThemeProviderProps {
  theme?: Partial<Theme>;
  children?: ReactNode;
}

export const ThemeProvider = ({ theme = {}, children }: ThemeProviderProps) => (
  <EmotionThemeProvider theme={merge({}, defaultTheme, theme)}>
    <Global styles={globalStyles} />
    {children}
  </EmotionThemeProvider>
);
