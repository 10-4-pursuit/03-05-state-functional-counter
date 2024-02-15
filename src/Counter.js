import React from 'react';

function Counter() {
    const [count, setCount] = React.useState(0);

    return (
        <div>
             <button onClick={ () => setCount (count + 1)} >Increase</button>
             { count }
        </div>
    )
    
}

export default Counter;