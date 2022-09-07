import React from 'react';
import CategoriesDetail from '../CategoriesDetail/CategoriesDetail';

const Categories = props => {
    const count = props.count;
    return (
        <div>
            <h3>Select Category</h3>
            <CategoriesDetail count={count}/>
        </div>
    );
};

export default Categories;