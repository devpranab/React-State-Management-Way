import React, { useContext, useState } from 'react';
import { CategoryContext } from '../../App';

const Header = props => {
    const [category, setCategory] = useContext(CategoryContext);
    
    return (
        <div>
            <h1>Header Page: {category}</h1>
            <button onClick={() => setCategory('Laptop')}>Laptop</button>
            <button onClick={() => setCategory('Mobile')}>Mobile</button>
            <button onClick={() => setCategory('Camera')}>Camera</button>
        </div>
    );
};

export default Header;