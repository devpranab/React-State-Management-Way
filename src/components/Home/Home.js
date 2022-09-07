import React from 'react';
import Categories from '../../components2/Categories/Categories';

const Home = props => {
    const count = props.count;
    const setCount = props.setCount;

    const handleIncrement = () => {
        setCount(count - 1);
    }
    return (
        <div style={{border: "1px solid purple"}}>
        <h1>Home Page: {count}</h1>
        <button onClick={handleIncrement}>Decrement</button>
        <Categories count={count}/>
        </div>
    );
};

export default Home;