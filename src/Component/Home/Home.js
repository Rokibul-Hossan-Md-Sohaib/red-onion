import React from 'react';
import Header from '../Header/Header';
import Lunch from '../Lunch/Lunch';
import Breakfest from '../Breakfast/Breakfest';
import Dinner from '../Dinner/Dinner';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import NotFound from '../Not-Found/NotFound';
import Head from '../Head/Head';
import ProductDetail from '../ProductDetail/ProductDetail';




const Home = () => {
    return (
        <div>
            
            
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
               < Dinner></Dinner>
                </Route>
                <Route path="/breakfast">
                <Head></Head>
                <Breakfest></Breakfest>
                </Route>
                <Route path="/Item/:itemKey">
                    <ProductDetail></ProductDetail>
                </Route>
               
                <Route  path="*">
                <NotFound></NotFound>
                </Route>


       </Switch>
    </Router>
            
            
            
            
        </div>
    );
};

export default Home;