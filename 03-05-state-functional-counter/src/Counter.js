// Counter.js
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ marginTop: '20px', padding: '10px', backgroundColor: 'lightgray' }}>
      <p style={{ color: 'blue' }}>Count: {count}</p>
      <button
        style={{ backgroundColor: 'green', color: 'white', padding: '5px', cursor: 'pointer' }}
        onClick={incrementCount}
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
