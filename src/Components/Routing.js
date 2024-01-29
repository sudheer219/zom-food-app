import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home/Home";
import ListingApi from "./listing/ListingApi";
const Routing = () => {
    return(
        <BrowserRouter>
            <Header />
                <Route exact path="/" component={Home} />
                <Route path="/listing/:mealid" component={ ListingApi } />
            <Footer />
        </BrowserRouter>
        )
        
        
}

export default Routing;
