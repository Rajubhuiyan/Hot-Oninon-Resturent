import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CartSide from "./components/CartSide/CartSide";
import ErrorCamp from "./components/ErrorComp/ErrorCamp";
import Home from './components/Home/Home';


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/product/:productid">
            <CartSide></CartSide>
          </Route>
          <Route path="*">
            <ErrorCamp></ErrorCamp>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
