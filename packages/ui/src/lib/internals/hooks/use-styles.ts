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

export const useAnyflightUiStyles = ({
  config: providedConfig,
  theme: providedTheme,
}: UseAnyflightUiStylesProps = {}) => {
  const originConfig = useAnyflightUiConfig();
  const originTheme = useAnyflightUiTheme();
  const { darkModeEnabled } = useAnyflightUiDarkMode();

  const config = providedConfig ?? originConfig;
  const theme = providedTheme ?? originTheme;

  return {
    config,
    theme,
    darkModeEnabled,
    prefix: config.prefix,
    applyStyles: applyStylesFactory(config, theme, darkModeEnabled),
  } as const;
};

function applyStylesFactory(config: AnyflightUiConfig, theme: AnyflightUiTheme, darkModeEnabled = false) {
  function applyStyles(stylesFactory: AnyflightUiStylesFactory): SerializedStyles;
  function applyStyles(stylesFactory: AnyflightUiStylesFactory[]): SerializedStyles[];
  function applyStyles(
    stylesFactory: AnyflightUiStylesFactory | AnyflightUiStylesFactory[],
  ): SerializedStyles | SerializedStyles[] {
    if (Array.isArray(stylesFactory)) {
      return stylesFactory.map((factory) => factory(config, theme, darkModeEnabled));
    }

    return stylesFactory(config, theme, darkModeEnabled);
  }

  return applyStyles;
}
