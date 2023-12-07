import { useState } from 'react';
import React from 'react';

const Counter = () => {
    const [count, setCount] = React.useState(0);

    const incrementCount = () => {
        setCount(count + 1 );
      }
    

    return (
   <div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    <h3>{count}</h3>
    </div>
    )

  }

  export default Counter;