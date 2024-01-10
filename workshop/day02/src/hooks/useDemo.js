import { useContext } from "react";
import DemoContext from "../DemoContext";

export const useDemo = () => {
    const demo = useContext(DemoContext);
    return demo;
    };