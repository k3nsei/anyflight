import { SerializedStyles } from '@emotion/react';

import { useAnyflightUiConfig, useAnyflightUiTheme } from '../../hooks';
import type { AnyflightUiConfig, AnyflightUiTheme } from '../../providers';

export interface AnyflightUiStylesFactory {
  (config: AnyflightUiConfig, theme: AnyflightUiTheme): SerializedStyles;
}

export interface UseAnyflightUiStylesProps {
  config?: AnyflightUiConfig;
  theme?: AnyflightUiTheme;
}

export const useAnyflightUiStyles = ({ config, theme }: UseAnyflightUiStylesProps = {}) => {
  const originConfig = useAnyflightUiConfig();
  const originTheme = useAnyflightUiTheme();

  return applyStylesFactory(config ?? originConfig, theme ?? originTheme);
};

function applyStylesFactory(config: AnyflightUiConfig, theme: AnyflightUiTheme) {
  function applyStyles(stylesFactory: AnyflightUiStylesFactory): SerializedStyles;
  function applyStyles(stylesFactory: AnyflightUiStylesFactory[]): SerializedStyles[];
  function applyStyles(
    stylesFactory: AnyflightUiStylesFactory | AnyflightUiStylesFactory[],
  ): SerializedStyles | SerializedStyles[] {
    if (Array.isArray(stylesFactory)) {
      return stylesFactory.map((factory) => factory(config, theme));
    }

    return stylesFactory(config, theme);
  }

  return applyStyles;
}
