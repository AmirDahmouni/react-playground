import { useState, useMemo } from 'react';
import { Theme } from '@mui/material/styles';
import { lightTheme, darkTheme } from '../config/theme';

export const useThemeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Memoize the current theme based on the `isDarkMode` state
  const theme: Theme = useMemo(() => (isDarkMode ? darkTheme : lightTheme), [isDarkMode]);

  // Toggle the theme
  const toggleTheme = () => setIsDarkMode((prevMode) => !prevMode);

  return { theme, toggleTheme, isDarkMode };
};
