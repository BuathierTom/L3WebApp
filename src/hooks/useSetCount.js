import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

export default function useSetCount() {
    return useContext(CounterContext).setCount;
}