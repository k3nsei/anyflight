import { createContext } from 'react';

import type { AnyflightUiConfig } from '../../providers';

export const AnyflightUiConfigContext = createContext<AnyflightUiConfig>({ prefix: 'af' });

AnyflightUiConfigContext.displayName = 'AnyflightUiConfigContext';
