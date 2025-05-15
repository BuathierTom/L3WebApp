import { use, useState } from "react";
import { useEffect } from "react";
import useCount from "../../hooks/useCount";
import useSetCount from "../../hooks/useSetCount";

export default function Body() {
    const count = useCount();
    const setCount = useSetCount();

    const [count2, setCount2] = useState(0);
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    const words = text.split(" ");
    
    const items = [];
    for (const word of words) {
        items.push(<li>{word}</li>);
    };

    useEffect(() => {
        document.title = `Counter ${count}`;
    }, [count]);

    return (
        <>
            <div>
				<p>Vous avez cliqué {count} fois!</p>
				<input
					type="button"
					value="Press me!"
					onClick={() => setCount((currCount) => currCount + 1)}
				/> 
			</div>
			<div>
				<p>Vous avez cliqué {count2} fois!</p>
				<input
					type="button"
					value="Press me!"
					onClick={() => setCount2((currCount) => currCount + 1)}
				/> 
			</div>
            <ul> 
                {items}
            </ul>
        </>
    );
  }