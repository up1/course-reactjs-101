import { createContext } from 'react';

const demoContext = createContext();

const DemoContextProvider = ({ children }) => {
  const demoContextValue = "Hello from context!"

  return (
    <demoContext.Provider value={demoContextValue}>
      {children}
    </demoContext.Provider>
  );
}