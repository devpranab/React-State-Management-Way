import React, { useState } from 'react';

const Header = () => {
    //local state
    const [count, setCount] = useState(10);

    const handleIncrement = () => {
        setCount(count + 1);
    }
    return (
        <div>
            <h1>Header Page: {count}</h1>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    );
};

export default Header;