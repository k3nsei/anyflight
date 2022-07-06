export interface AnyflightUiDarkMode {
  isEnabled: boolean;
  isForced?: boolean;
  setUserPreference: (value?: 'dark' | 'light' | null) => void;
}
