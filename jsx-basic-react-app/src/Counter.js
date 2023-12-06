import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }

  const reset = () => {
    setCount(0);
  }
  return <div>
    <h1>Counter</h1>
    <p>Count: {count}</p>
    <button className='decrement' onClick={decrement}>Decrement</button>
    <button className='increment' onClick={increment}>Increment</button>
    <button className='reset' onClick={reset}>Reset</button>
    
  </div>;
};

export default Counter;
