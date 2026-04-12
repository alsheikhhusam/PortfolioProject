import { createContext, useContext } from 'react';

export const ThemeContext = createContext({
  mode: 'dark',
  toggleTheme: () => {},
});

export function useThemeMode() {
  return useContext(ThemeContext);
}
