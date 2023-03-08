import { useState, createContext } from 'react';

const ThemesContext = createContext({
  handleThemeChanges: () => {},
  theme: 'dark'
});

const ThemesProvider = ({ children }: { children: React.ReactElement }) => {
  const [theme, setTheme] = useState('dark');

  const handleThemeChanges = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemesContext.Provider value={{ handleThemeChanges, theme }}>
      {children}
    </ThemesContext.Provider>
  );
};

export default ThemesContext;
export { ThemesProvider };
