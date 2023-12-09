import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <button onClick={() => setCount((count - 1))}>Decrease</button>
            <h2>{count}</h2>
            <button onClick={() => setCount((count + 1))}>Increase</button>
        </div>
    )
    
}

export default Counter;