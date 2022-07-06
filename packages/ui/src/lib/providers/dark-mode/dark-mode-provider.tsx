import { ReactNode, useCallback, useEffect, useState } from 'react';

import { DarkModeUserPreference } from './dark-mode-user-preference';
import { DarkModeContext } from './dark-mode.context';

const userPreference = DarkModeUserPreference.getInstance();
const mediaQueryList = matchMedia('(prefers-color-scheme: dark)');

const applyDocumentClassName = (isEnabled: boolean): void => {
  const className = 'dark-mode';
  const { classList } = document.documentElement;

  return isEnabled ? classList.add(className) : classList.remove(className);
};

export const DarkModeProvider = ({ children }: { children?: ReactNode }) => {
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
    <DarkModeContext.Provider
      value={{
        isEnabled,
        isForced: userPreference.value,
        setUserPreference: (value) => userPreference.next(value),
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};
