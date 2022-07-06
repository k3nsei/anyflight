import { SerializedStyles } from '@emotion/react';

import { useAnyflightUiConfig, useAnyflightUiDarkMode, useAnyflightUiTheme } from '../../hooks';
import type { AnyflightUiConfig, AnyflightUiTheme } from '../../providers';

export interface AnyflightUiStylesFactory {
  (config: AnyflightUiConfig, theme: AnyflightUiTheme, isDarkModeEnabled: boolean): SerializedStyles;
}

export interface UseAnyflightUiStylesProps {
  config?: AnyflightUiConfig;
  theme?: AnyflightUiTheme;
}

export const useAnyflightUiStyles = ({ config, theme }: UseAnyflightUiStylesProps = {}) => {
  const originConfig = useAnyflightUiConfig();
  const originTheme = useAnyflightUiTheme();
  const { isDarkModeEnabled } = useAnyflightUiDarkMode();

  return applyStylesFactory(config ?? originConfig, theme ?? originTheme, isDarkModeEnabled);
};

function applyStylesFactory(config: AnyflightUiConfig, theme: AnyflightUiTheme, isDarkModeEnabled = false) {
  function applyStyles(stylesFactory: AnyflightUiStylesFactory): SerializedStyles;
  function applyStyles(stylesFactory: AnyflightUiStylesFactory[]): SerializedStyles[];
  function applyStyles(
    stylesFactory: AnyflightUiStylesFactory | AnyflightUiStylesFactory[],
  ): SerializedStyles | SerializedStyles[] {
    if (Array.isArray(stylesFactory)) {
      return stylesFactory.map((factory) => factory(config, theme, isDarkModeEnabled));
    }

    return stylesFactory(config, theme, isDarkModeEnabled);
  }

  return applyStyles;
}
