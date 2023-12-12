import React, {useState} from "react";
 const Counter = () => {
const [count, setCount]= useState(0);

const incrementCount = () => {
	setCount(count + 1);
};

const decrementCount = () => {
	setCount(count -1);
}

return(
	<div style={{textAlign: 'center', marginTop: '100px'}}>
		<p style={{ fontSize: '100px', marginRight: '10px'  }}>{count}</p>
		<button onClick={incrementCount} style={{marginRight: '100px', fontSize: '50px',}}>+</button>
		<button onClick={decrementCount} style={{ marginLeft: '100px',fontSize: '50px',}}>-</button>
	</div>
)
 }

 export default Counter;