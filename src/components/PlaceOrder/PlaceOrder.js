import React, { useState } from 'react';
import ConfirmPlaceOrder from '../ConfirmPlaceOrder/ConfirmPlaceOrder';
import './placeOrder.css'
const PlaceOrder = () => {
    const [button, setButton] = useState(false)
    const signUpSubmit = (event) => {
        setButton(true)
        event.preventDefault()
    }
    return (
        <div className="container mt-5">
                <div className="row">
                    <div className="col-md-8">
                        <form onSubmit={signUpSubmit}>
                            <h4 style={{borderBottom: '1px solid lightgray'}}>Edit Delivery Details</h4>
                            <input required defaultValue="" type="text" placeholder="Division" />
                            <input required defaultValue="" type="text" placeholder="District" />
                            <input required defaultValue="" type="text" placeholder="Flat, Suit or Floor" />
                            <input required defaultValue="" type="text" placeholder="Area" />
                            <input required defaultValue="" type="text" placeholder="Add Delivery Instructor" />
                            <input className="input-btn" type="submit" value="Save And Continue" />
                        </form>
                    </div>
                    <div className="col-md-4 mt-5">
                        <ConfirmPlaceOrder button={button}></ConfirmPlaceOrder>
                    </div>
                </div>
        </div>
    );
};

export default PlaceOrder;