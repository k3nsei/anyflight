import { useContext } from 'react';

import { AnyflightUiConfigContext } from '../internals';

export const useAnyflightUiConfig = () => useContext(AnyflightUiConfigContext);
