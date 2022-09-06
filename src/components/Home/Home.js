import React from 'react';

const Home = props => {
    const count = props.count;
    const setCount = props.setCount;

    const handleIncrement = () => {
        setCount(count - 1);
    }
    return (
        <div>
        <h1>Home Page: {count}</h1>
        <button onClick={handleIncrement}>Decrement</button>
        </div>
    );
};

export default Home;