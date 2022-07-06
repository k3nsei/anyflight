import { ReactNode, useEffect, useState } from 'react';

import { AnyflightUiDarkModeContext } from '../../internals';
import { DarkModeUserPreference } from './dark-mode-user-preference';

const userPreference = DarkModeUserPreference.getInstance();
const mediaQueryList = matchMedia('(prefers-color-scheme: dark)');

const applyDocumentClassName = (isEnabled: boolean): void => {
  const className = 'dark-mode';
  const { classList } = document.documentElement;

  return isEnabled ? classList.add(className) : classList.remove(className);
};

export interface AnyflightUiDarkModeProviderProps {
  children?: ReactNode;
}

export const AnyflightUiDarkModeProvider = ({ children }: AnyflightUiDarkModeProviderProps) => {
  const [isEnabled, setIsEnabled] = useState<boolean>(userPreference.value ?? mediaQueryList.matches);

  const update = (value: boolean) => {
    applyDocumentClassName(value);
    setIsEnabled(value);
  };

  useEffect(() =>
    userPreference.subscribe((value?: boolean) => {
      update(value ?? mediaQueryList.matches);
    }),
  );

  useEffect(() => {
    const callback = ({ matches }: MediaQueryListEvent) => update(userPreference.value ?? matches);

    mediaQueryList.addEventListener('change', callback);

    return () => mediaQueryList.removeEventListener('change', callback);
  });

  return (
    <AnyflightUiDarkModeContext.Provider
      value={{
        isEnabled,
        isForced: userPreference.value,
        setUserPreference: (value) => userPreference.next(value),
      }}
      children={children}
    />
  );
};

AnyflightUiDarkModeProvider.displayName = 'AnyflightUiDarkModeProvider';
