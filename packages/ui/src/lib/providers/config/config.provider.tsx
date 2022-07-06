import { ReactNode, useMemo } from 'react';

import { PartialDeep, merge } from '@anyflight/utils';

import { useAnyflightUiConfig } from '../../hooks';
import { AnyflightUiConfigContext } from '../../internals';
import type { AnyflightUiConfig } from './config.type';

/**
 * Used only for memoize purposes, to not generate new config object with each render
 */
export const emptyConfig = Object.freeze({}) as AnyflightUiConfig;

export interface AnyflightUiConfigProviderProps {
  config: PartialDeep<AnyflightUiConfig>;
  children?: ReactNode;
}

export const AnyflightUiConfigProvider = ({ config = emptyConfig, children }: AnyflightUiConfigProviderProps) => {
  const originConfig = useAnyflightUiConfig();

  const value = useMemo(() => merge({}, originConfig, config), [originConfig, config]);

  return <AnyflightUiConfigContext.Provider value={value} children={children} />;
};

AnyflightUiConfigProvider.displayName = 'AnyflightUiConfigProvider';
