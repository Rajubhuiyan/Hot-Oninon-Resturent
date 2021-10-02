import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { cartContext } from '../../App';

const PrivateRoute = ({children, ...rest}) => {
    const [priceAndCart, setPriceAndCart] = useContext(cartContext);
    return (
        <Route
            {...rest}
            render={({ location }) =>
                priceAndCart.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;