import { createContext, useContext } from "react";

// 1. Create context
const MyContext = createContext("demo context");

export const DemoContextProvider = ({children}) => {
    const myValue = "Hello from context";
    // 2. Provider
    return (
        <MyContext.Provider value={myValue}>
            {children}
        </MyContext.Provider>
    );
}

export const ChildComponent = () => {
    // 3. Consumer
    const value = useContext(MyContext);
    return (
        <div>{value}</div>
    );
}