import DemoContext from "./DemoContext";

const DemoContextProvider = ({ children }) => {
  const demoContextValue = {
    value: "Hello from context!",
    sayHi: sayHi
  }

  function sayHi() {
    console.log("Hi from DemoContextProvider")
  }

  return (
    <DemoContext.Provider value={demoContextValue}>
      {children}
    </DemoContext.Provider>
  );
}

export default DemoContextProvider;