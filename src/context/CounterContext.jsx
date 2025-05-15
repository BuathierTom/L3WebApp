import { createContext, useEffect, useState } from "react";

export const CounterContext = createContext({ count: 0 });

export default function CounterContextProvider({ children }) {
	const [count, setCount] = useState(parseInt(localStorage.counter || '0'));

	useEffect(() => {
		document.title = `Counter ${count}`;
		localStorage.counter = count;
	}, [count]);

	return (
		<CounterContext.Provider value={{ count, setCount }}>
			{children}
		</CounterContext.Provider>
	);
}