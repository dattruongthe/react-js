import React, {useState, useEffect} from 'react';

function Counter() {
    const [count,setCount] = useState(0);

    useEffect(()=> {
        document.title = `You clicked ${count} time`;
    })

    return (
        <>
            <h2>You click {count} times.</h2>
            <button onClick={() => {setCount(count + 1)}}>
                Click me
            </button>
        </>
    )
}

export default Counter;