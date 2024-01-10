import DemoContext from "./DemoContext";

const DemoContextProvider = ({ children }) => {
  const demoContextValue = "Hello from context!"

  return (
    <DemoContext.Provider value={demoContextValue}>
      {children}
    </DemoContext.Provider>
  );
}

export default DemoContextProvider;