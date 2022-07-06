import { ReactNode, createContext, useCallback, useEffect, useState } from 'react';

import { DarkModeUserPreference } from './dark-mode-user-preference';

const userPreference = DarkModeUserPreference.getInstance();

export const DarkModeContext = createContext<{
  isDarkMode: boolean;
  userPreference: boolean | null;
  setUserPreference: (value: boolean | null) => void;
}>({
  isDarkMode: false,
  userPreference: userPreference.value,
  setUserPreference: (value) => userPreference.next(value),
});
DarkModeContext.displayName = 'DarkModeContext';

const mediaQueryList = matchMedia('(prefers-color-scheme: dark)');

const applyDocumentClassName = (isDarkMode: boolean) => {
  const { classList } = document.documentElement;
  const darkModeClassName = 'dark-mode';

  if (isDarkMode) {
    classList.add(darkModeClassName);
  } else {
    classList.remove(darkModeClassName);
  }
};

export const DarkModeProvider = ({ children }: { children?: ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(userPreference.value ?? mediaQueryList.matches);

  const applyChange = useCallback(
    (value: boolean) => {
      applyDocumentClassName(value);
      setIsDarkMode(value);
    },
    [setIsDarkMode],
  );

  useEffect(() => {
    const callback = (value: boolean | null) => applyChange(value ?? mediaQueryList.matches);

    userPreference.subscribe(callback);

    return () => userPreference.unsubscribe(callback);
  }, [applyChange]);

  useEffect(() => {
    const callback = ({ matches }: MediaQueryListEvent) => applyChange(userPreference.value ?? matches);

    mediaQueryList.addEventListener('change', callback);

    return () => mediaQueryList.removeEventListener('change', callback);
  }, [applyChange]);

  return (
    <DarkModeContext.Provider
      value={{
        isDarkMode,
        userPreference: userPreference.value,
        setUserPreference: (value) => userPreference.next(value),
      }}
      children={children}
    />
  );
};
