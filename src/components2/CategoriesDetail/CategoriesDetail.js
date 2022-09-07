import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const CategoriesDetail = props => {
    const category =  useContext(CategoryContext)
    const count = props.count;
    return (
        <div>
            CategoriesDetail: {count}
            <h6>selected category: {category }</h6>
        </div>
    );
};

export default CategoriesDetail;