import React, { useState } from 'react';
export const Button = () => {
    const [count, setCount] = useState(1);
    return (
        <div>
            <button onClick={() => setCount(count => count +1)}>Bye React</button>
            <div>{count}</div>
        </div>
    )
}