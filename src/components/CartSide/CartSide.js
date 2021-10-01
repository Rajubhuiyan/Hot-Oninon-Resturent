import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import getFakeData from '../../fakeData/fakeData.json';
import './CartSide.css'
import cartBtn from '../../images/ICON/Path 1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const CartSide = () => {
    const { productid } = useParams();
    const [item, setItem] = useState([]);
    const { name, price, picture } = item;
    useEffect(() => {
        const product = getFakeData.find(pd => pd.id === productid);
        setItem(product);
    }, []);
    const [newPrice, setNewPrice] = useState(0);
    const [cartCount, setCartCount] = useState(0);
    

    const cartIncrease = (isCartIncrease) =>{
                if (isCartIncrease) {
                    const newCartValue = cartCount + 1;
                    const finalPrice = newCartValue * price;
                    setNewPrice(finalPrice.toFixed(2));
                    setCartCount(newCartValue);
                }
                if (cartCount > 0 && isCartIncrease === false ) {
                    const newCartValue = cartCount - 1 ;
                    const finalPrice = newCartValue * price;
                    setNewPrice(finalPrice.toFixed(2))
                    setCartCount(newCartValue)
                }
    }
    
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-5">
                    <h2>{name}</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptatem repellendus, placeat ea sit numquam nemo debitis id dolorem illo molestiae omnis vel, maiores culpa similique recusandae, necessitatibus iusto cupiditate?</p>
                    <div className="row">
                        <div className="col-md-6">
                            <h3>$ {newPrice}</h3>
                        </div>
                        <div className="col-md-6">
                            <button onClick={() => cartIncrease(false)} style={{ background: 'none', border: 'none' }}> <FontAwesomeIcon icon={faMinus} /> </button>
                            <input className="form-control cart-input" type="number" name="" id="" value={cartCount} />
                            <button onClick={() => cartIncrease(true)} style={{ background: 'none', border: 'none' }}> <FontAwesomeIcon icon={faPlus} /> </button>
                        </div>
                    </div>
                    {
                        cartCount > 0 ? <Link to="/home"><button className="search-btn mt-2"> <img style={{ width: '25px', marginRight: '5px' }} className="img-fluid" src={cartBtn} alt="" /> Add</button></Link> 
                        : 
                        <div>
                            <button className="search-btn mt-2"> <img style={{ width: '25px', marginRight: '5px' }} className="img-fluid" src={cartBtn} alt="" /> Add</button>
                            <p> <small> First Add To Cart </small></p>
                        </div>
                    }
                </div>
                <div className="col-md-7">
                    <img className="img-fluid" src={picture} alt="" />
                </div>
            </div>
        </div>
    );
};

export default CartSide;