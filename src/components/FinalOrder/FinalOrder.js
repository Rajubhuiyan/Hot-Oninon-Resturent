import React, { useContext } from 'react';
import Map from '../../images/map.png';
import BikeIcon from '../../images/Image/Group 1151.png';
import './FinalOrder.css'
import HelmetIcon from '../../images/Image/Group 1152.png';
import { cartContext } from '../../App';

const FinalOrder = () => {
    const [priceAndCart] = useContext(cartContext);
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-7 mt-5">
                    <img className="img-fluid" style={{ width: '800px' }} src={Map} alt="" />
                </div>
                <div className="col-md-5">
                    <div className="deliveryStyle mt-5">
                        <img style={{ width: '200px' }} className="img-fluid" src={BikeIcon} alt="" />
                        <div className="locationStyle">
                            <li>Your Location</li>
                            <p> <small> 107 Rd No 8 </small> </p>
                            <li>Shop Address</li>
                            <p> <small> Fluto Planet </small></p>
                        </div>
                        <h3>9.30</h3>
                        <p>Estimeted Delivery Time</p>
                        <div className="helmetStyle">
                            <img src={HelmetIcon} alt="" />
                            <h4>{priceAndCart.name}</h4>
                        </div>
                        <button className="contactButton mt-4">Contact</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FinalOrder;