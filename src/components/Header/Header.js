import React from 'react';

const Header = props => {
    const count = props.count;
    const setCount = props.setCount;

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