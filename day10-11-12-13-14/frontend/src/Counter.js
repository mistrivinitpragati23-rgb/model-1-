import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    // Added new state for the text input
    const [text, setText] = useState("");

    return (
        <div>
            <h1>Counter: {count}</h1>
            
            <button onClick={() => {
                setCount(count + 1);
            }}>Increment</button>

            <button onClick={() => {
                setCount(count - 1);
            }}>Decrement</button>

            {/* Added Reset Button */}
            <button onClick={() => {
                setCount(0);
            }}>Reset</button>

            <br /><br />

            {/* Added onChange use case for the number */}
            <label>Set Counter Manually: </label>
            <input 
                type="number" 
                value={count} 
                onChange={(e) => {
                    setCount(Number(e.target.value)); 
                }} 
            />

            <br /><br />
            
            {/* Added onChange use case for text */}
            <label>Type some text: </label>
            <input 
                type="text" 
                value={text} 
                onChange={(e) => {
                    setText(e.target.value); 
                }} 
            />
            <p>You typed: {text}</p>
        </div>
    );
};

export default Counter;