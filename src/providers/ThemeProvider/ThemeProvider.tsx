import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Theme } from './types';

interface IThemeProviderProps {
  children: React.ReactNode;
}

interface IThemeContextType {
  theme: Theme;
  switchTheme: () => void;
}

const ThemeContext = React.createContext<IThemeContextType>({} as IThemeContextType);

export const useThemeContext = () => React.useContext(ThemeContext);

const THEME_KEY = 'theme_key';

export const ThemeProvider = ({ children }: IThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>((localStorage.getItem(THEME_KEY) as Theme) || Theme.Light);

  useEffect(() => {
    localStorage.setItem(THEME_KEY, theme);

    document.body.classList.add(theme);

    return () => document.body.classList.remove(theme);
  }, [theme]);

  const switchTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === Theme.Dark ? Theme.Light : Theme.Dark));
  }, []);

  const themeContextValue = useMemo(() => ({ theme, switchTheme }), [theme, switchTheme]);

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <div>{children}</div>
    </ThemeContext.Provider>
  );
};
