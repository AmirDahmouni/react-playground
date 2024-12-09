import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { RecoilRoot } from 'recoil';
import { Provider } from 'react-redux';
import { store } from './store/redux/store';
import { AppContextProvider } from './store/context/AppContext';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import { useThemeSwitcher } from './hooks/useThemeSwitcher';
import { Route, Routes } from 'react-router-dom';
import contents from './routes'; // Import the routes file

const App: React.FC = () => {

  const { theme, toggleTheme, isDarkMode } = useThemeSwitcher();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Button variant="contained" onClick={toggleTheme}>
        Switch to {isDarkMode ? 'Light' : 'Dark'} Theme
      </Button>
      <RecoilRoot>
        <Provider store={store}>
          <AppContextProvider>
            <Routes>
              {contents.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
              ))}
            </Routes>
          </AppContextProvider>
        </Provider>
      </RecoilRoot>
    </ThemeProvider>
  );
};

export default App;
