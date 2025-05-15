import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

export default function useCount() {
    return useContext(CounterContext).count;
}