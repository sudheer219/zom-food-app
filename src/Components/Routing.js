import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home/Home";
import Listingapi from "./listing/Listingapi";
import Details from "./Details/Details";
import PlaceOrder from "./orders/PlaceOrder";

const Routing = () => {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/listing/:mealId" component={Listingapi} />
      <Route path="/details" component={Details} />
      <Route path="/placeOrder/:restName" component={PlaceOrder} />
      <Footer />
    </BrowserRouter>
  );
};

export default Routing;
