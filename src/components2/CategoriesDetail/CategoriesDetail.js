import React from 'react';

const CategoriesDetail = (props) => {
    const {name} = props.product;
    return (
        <div>
            <h5>Selected Product: {name}</h5>
        </div>
    );
};

export default CategoriesDetail;