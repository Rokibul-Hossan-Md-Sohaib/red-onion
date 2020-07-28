import React from "react";
import Header from "../Header/Header";
import Lunch from "../Lunch/Lunch";
import Breakfest from "../Breakfast/Breakfest";
import Dinner from "../Dinner/Dinner";
import Inventory from "../Inventory/Inventory";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NotFound from "../Not-Found/NotFound";
import Head from "../Head/Head";
import ProductDetail from "../ProductDetail/ProductDetail";

import Login from "../LogIn/Login";
import Signup from "../LogIn/Signup";
// import Payment from "../CheckOutForm/Payment";
import { AuthContextProvider, PrivateRoute } from "../LogIn/useAuth";
import Review from "../Review/Review";
import Shipment from "../Shipment/Shipment";

const Home = () => {
  return (
    <div>
      <AuthContextProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Header></Header>
              <Lunch></Lunch>
            </Route>
            <Route path="/lunch">
              <Head></Head>
              <Lunch></Lunch>
            </Route>
            <Route path="/dinner">
              <Head></Head>
              <Dinner></Dinner>
            </Route>
            <Route path="/breakfast">
              <Head></Head>
              <Breakfest></Breakfest>
            </Route>
            <Route path="/inventory">
              <Inventory></Inventory>
            </Route>
            <Route path="/review">
              <Review></Review>
            </Route>
            <PrivateRoute path="/shipment">
              <Shipment></Shipment>
            </PrivateRoute>
            {/* <Route path="/geteway">
              <Payment></Payment>
            </Route> */}
            {/* <Route path="/Item/:itemKey">
              <ProductDetail></ProductDetail>
            </Route> */}
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signin">
              <Signup></Signup>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthContextProvider>
    </div>
  );
};

export default Home;
