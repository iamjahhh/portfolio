import React, { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (!savedTheme) {
      return true;
    }
    return savedTheme === 'dark';
  };

  const [darkMode, setDarkMode] = useState(getInitialTheme);

  useEffect(() => {
    if (!localStorage.getItem('theme')) {
      localStorage.setItem('theme', 'dark');
    }

    document.body.classList.add('theme-transitioning');
    
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark-mode', darkMode);
    document.body.classList.toggle('dark-mode', darkMode);

    const transitionTimeout = setTimeout(() => {
      document.body.classList.remove('theme-transitioning');
    }, 300);

    return () => clearTimeout(transitionTimeout);
  }, [darkMode]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      if (!localStorage.getItem('theme')) {
        setDarkMode(e.matches);
      }
    };

    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, []);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
