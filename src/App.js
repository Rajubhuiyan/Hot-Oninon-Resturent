import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CartSide from "./components/CartSide/CartSide";
import ErrorCamp from "./components/ErrorComp/ErrorCamp";
import Home from './components/Home/Home';
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import SignUpPage from "./components/SignUpPage/SignUpPage";

export const cartContext = createContext();

function App() {
  const [priceAndCart, setPriceAndCart] = useState({
    newPrice:0,
    cart: 0,
    email: ''
  });

console.log(priceAndCart.email);
  return (
    <cartContext.Provider value={[priceAndCart, setPriceAndCart]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/product/:productid">
            <CartSide></CartSide>
          </Route>
          <PrivateRoute path="/placeorder">
            <PlaceOrder></PlaceOrder>
          </PrivateRoute>
          <Route path="/login">
            <SignUpPage></SignUpPage>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <ErrorCamp></ErrorCamp>
          </Route>
        </Switch>
      </Router>
    </cartContext.Provider>
  );
}

export default App;
