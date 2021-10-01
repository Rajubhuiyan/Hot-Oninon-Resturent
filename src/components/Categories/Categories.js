import './Categories.css';
import { useContext, useEffect, useState } from 'react';
import fakeData from '../../fakeData/fakeData.json';
import CategoryDetails from '../CategoryDetails/CategoryDetails';
import './Categories.css'
import { ToggleButton } from 'react-bootstrap';
import { categoryContext } from '../Home/Home';


const Categories = () => {
    const [category, setCategory] = useContext(categoryContext);

    const [product, setProduct] = useState([]);

    useEffect(() => {
        const fakeProduct = fakeData;
        const categories = fakeProduct.filter(pd => pd.category === category);
        setProduct(categories);
    }, [category]);

    return (
        <>
            <div className="categories container">
                {
                    product.map(product => <CategoryDetails key={product.id} product={product}></CategoryDetails>)
                }
            </div>
            <div className="container checkout-btn">
                <ToggleButton id="tbg-check-1" value={1}>Ckeck Out Your Food</ToggleButton>
            </div>
        </>
    );
};

export default Categories;