import React from 'react';
import { ThemeProviderWrapper } from './config/theme';
import { RecoilRoot } from 'recoil';
import { Provider } from 'react-redux';
import { store } from './store/redux/store';
import { AppContextProvider } from './store/context/AppContext';
import { Header } from './components/Header';
import { Home } from './pages/Home';

const App: React.FC = () => {
  return (
    <ThemeProviderWrapper>
      <RecoilRoot>
        <Provider store={store}>
          <AppContextProvider>
            <Header />
            <Home />
          </AppContextProvider>
        </Provider>
      </RecoilRoot>
    </ThemeProviderWrapper>
  );
};

export default App;
