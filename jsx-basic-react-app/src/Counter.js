import{ useState } from 'react';
function Counter() {
    const [count, setCount] = useState(0);
    
    function increment () {
        setCount(count + 1);
    }
    function decrement () {
        setCount(count - 1);
    }
    return (
        <div>
            <div>Count: {count}</div>
            <button onClick={onIncrement}>+</button>
            <button onClick={onDecrement}>-</button>
        </div>
    );
}

export default Counter;