import DemoContext from "./DemoContext";

const DemoContextProvider = ({ children }) => {
  const demoContextValue = {
    value: "Hello from context!",
    sayHi: sayHi
  }

  function sayHi() {
    console.log("Hi from DemoContextProvider")
    // TODO :: write data to locatstorage vs session storage vs cookie secure
    localStorage.setItem("demo_data", JSON.stringify({msg: "Hello from context!"}))

    sessionStorage.setItem("demo_data", JSON.stringify({msg: "Hello from context!"}))
  }

  return (
    <DemoContext.Provider value={demoContextValue}>
      {children}
    </DemoContext.Provider>
  );
}

export default DemoContextProvider;