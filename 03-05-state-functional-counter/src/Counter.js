import { useState } from 'react';


export default function Counter(){



const [counter, setState] = useState(0);

const increment = (c) => {
    setState(c + 1)
}


    return(
        <div>
            <button onClick={() =>increment(counter)}> increase
                 </button>
            counter1:{counter}
        </div>
    )
}