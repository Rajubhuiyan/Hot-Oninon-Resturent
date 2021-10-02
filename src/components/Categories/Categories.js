import './Categories.css';
import { useContext, useEffect, useState } from 'react';
import fakeData from '../../fakeData/fakeData.json';
import CategoryDetails from '../CategoryDetails/CategoryDetails';
import './Categories.css'
import { ToggleButton } from 'react-bootstrap';
import { categoryContext } from '../Home/Home';
import { cartContext } from '../../App';
import { useHistory } from 'react-router';


const Categories = () => {
    const [category] = useContext(categoryContext);

    const [product, setProduct] = useState([]);

    const [priceAndCart] = useContext(cartContext);

    useEffect(() => {
        const fakeProduct = fakeData;
        const categories = fakeProduct.filter(pd => pd.category === category);
        setProduct(categories);
    }, [category]);


    const history = useHistory();

    const handlePlaceOrder = () => {
        history.push('/placeorder')
    }

    return (
        <>
            <div className="categories container">
                {
                    product.map(product => <CategoryDetails key={product.id} product={product}></CategoryDetails>)
                }
            </div>
            <div className="container checkout-btn">
                {
                    priceAndCart.cart > 0 ? <ToggleButton onClick={handlePlaceOrder} id="tbg-check-1" value={1}>Ckeck Out Your Food</ToggleButton> : <ToggleButton disabled id="tbg-check-1" value={1}>Ckeck Out Your Food</ToggleButton>
                }
            </div>
        </>
    );
};

export default Categories;