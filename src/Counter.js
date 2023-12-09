import { useState } from "react";
import React from "react";

function Counter(props) {
    const [count, setCount] = useState(0)
    return(
        <div>
        <h2>{count}</h2>
        <button onClick={() => setCount(count + 1)}>+1</button>
        <button onClick={() => setCount(count - 1)}>-1</button>
        <button onClick={() => setCount(count * 2)}>*2</button>
        </div>
    )
}

export default Counter;