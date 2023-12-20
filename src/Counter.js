import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0)

    const incrementFunction = () => {
    setCount(count + 1);
  };

  return (
    <div>
        <h1>Counter</h1>
        <p>Count: {count}</p>
        <button onClick={incrementFunction}>Increment</button>
    </div>
  )
}

export default Counter