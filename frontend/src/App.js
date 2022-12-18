import React, { useState, useEffect } from "react";
import { Route, Router, Switch } from 'react-router-dom'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import 'bootstrap/dist/css/bootstrap.min.css';

import CheckoutForm from "./components/stripe/CheckoutForm"
import Loading from "./components/Loading";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./views/Home";
import Booking from './views/Booking.js'
import PlaceIndex from './places/PlaceIndex'
import PlaceDetails from './places/PlaceDetails'
// import Navigation from './Navigation'
import Error404 from './Error404'
import NewPlaceForm from './places/NewPlaceForm'
import EditPlaceForm from './places/EditPlaceForm'
import SignUpForm from './users/SignUpForm'
import LoginForm from './users/LoginForm'
// import CurrentUserProvider from './contexts/CurrentUser'

function App() {
  return (
<<<<<<< HEAD
    <Router history={history}>
      <div id="app" className="d-flex flex-column h-100">
      <div className="App">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
        <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/profile" component={Profile} />
            <Route exact path="/fish" component={Fish} />
            <Route exact path="/about" component={About} />
            <Route exact path="/booking" component={Booking} />
            <Route path='/BookingConfirmation' component={BookingConfirmation} />
            <Route path="/" component={Error404} />
            <Route path="/external-api" component={ExternalApi} />
          </Switch>
        <Footer />
    </div>
    </Router>
=======
    // <CurrentUserProvider>
      <BrowserRouter>
       
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/booking" component={Booking} />
          <Route exact path="/sign-up" component={SignUpForm} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/places" component={PlaceIndex} />
          <Route exact path="/places/new" component={NewPlaceForm} />
          <Route exact path="/places/:placeId" component={PlaceDetails} />
          <Route exact path="/places/:placeId/edit" component={EditPlaceForm} />
          <Route path="/" component={Error404} />
        </Switch>
      </BrowserRouter>
      // </CurrentUserProvider>
>>>>>>> 59c84bc84bb5eb7d83942cab0c9a6a4ff92d2b69
  );
}

export default App;
