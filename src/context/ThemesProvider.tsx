import { useState, createContext } from 'react';

const detectColorScheme = () =>
  window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

const ThemesContext = createContext({
  handleThemeChanges: () => {},
  theme: detectColorScheme()
});

const ThemesProvider = ({ children }: { children: React.ReactElement }) => {
  const [theme, setTheme] = useState(detectColorScheme());

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
