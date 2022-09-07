import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const Header = props => {
    const [count, setCount] = useContext(CategoryContext);

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