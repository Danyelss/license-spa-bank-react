import React, { createContext, useContext, useState, useCallback, useMemo } from 'react';

const Context = createContext();

export const useThemeContext = () => useContext(Context);

export default function ThemeContext({ children }) {
  const [theme, setTheme] = useState('dark');

  const isLight = useMemo(() => theme === 'light', [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => ('dark'));
    //setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  }, []);

  return <Context.Provider value={{ theme, isLight, toggleTheme }}>{children}</Context.Provider>;
}
