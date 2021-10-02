import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { cartContext } from '../../App';
import './ConfirmPlaceOrder.css'
const ConfirmPlaceOrder = (props) => {
    const [priceAndCart] = useContext(cartContext);
    debugger
    const {newPrice} = priceAndCart;
    const tax = newPrice / 20;
    
    let deliveryFee = 10;
    if (newPrice> 100) {
        deliveryFee = 5
    }
    const lastFinalPrice = parseInt(newPrice);
    let totalPrice = 0;
    if (priceAndCart.cart > 0) {
        totalPrice = (lastFinalPrice + tax + deliveryFee);
    }
    const history = useHistory();
    
    const handleFinalOrder = () =>{
            history.push('/confirmOrder')
    }
    
    return (
        <div className="confirmPlaceStyle">
            <h6>From <strong> Another Planet </strong></h6>
            <h4>Arriving In 20-30 min</h4>
            <p>Jupiter Planet.</p>
            <h6>Total Cart: {priceAndCart.cart}</h6>
            <h6>Item Total Price:$ {newPrice}</h6>
            <h6>Tax:$ {tax.toFixed(2)}</h6>
            <h6>Delivery Fee:$ {deliveryFee}</h6>
            <h4>Total:$ {totalPrice.toFixed(2)}</h4>
            {
                props.button ? <button onClick={handleFinalOrder} className="placeOrderedBtn">Place Ordered</button> : <button disabled className="disableplaceOrderedBtn">Place Ordered</button>
            }
        </div>
    );
};

export default ConfirmPlaceOrder;