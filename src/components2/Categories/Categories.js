import React, {useContext, useEffect, useState} from 'react';
import { CategoryContext } from '../../App';
import CategoriesDetail from '../CategoriesDetail/CategoriesDetail';

const allProducts = [
    {name: 'Microsoft', category: 'Laptop'},
    {name: 'Asus', category: 'Laptop'},
    {name: 'Mi', category: 'Laptop'},
    {name: 'Samsung', category: 'Mobile'},
    {name: 'Nokia', category: 'Mobile'},
    {name: 'Mi', category: 'Mobile'},
    {name: 'Sony', category: 'Camera'},
    {name: 'Nikon', category: 'Camera'},
    {name: 'Canon', category: 'Camera'}
]


const Categories = props => {
    const [category, setCategory] = useContext(CategoryContext);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const matchedProducts = allProducts.filter(pd => pd.category.toLowerCase() === category.toLowerCase());
        setProducts(matchedProducts);
    }, [category])

    return (
        <div>
            <h3>Select Category: {category}</h3>
            {
                products.map(pd => <CategoriesDetail product={pd}/>)
            }
        </div>
    );
};

export default Categories;