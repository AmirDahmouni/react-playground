import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext<any>(null);

export const AppContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState({ name: 'John Doe' });

  return <AppContext.Provider value={{ user, setUser }}>
    {children}
  </AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
