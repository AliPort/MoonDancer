import React, { useState, useEffect } from "react";
//import { Container } from "reactstrap";
import {  Route, Router, Switch } from 'react-router-dom'
 import { loadStripe } from "@stripe/stripe-js";
 import { Elements } from "@stripe/react-stripe-js";
import 'bootstrap/dist/css/bootstrap.min.css';

 import CheckoutForm from "./components/stripe/CheckoutForm"
// import Loading from "./components/Loading";
// import NavBar from "./components/NavBar";
// import Footer from "./components/Footer";
import Home from "./views/Home";
import Booking from './views/Booking.js'
import PlaceIndex from './places/PlaceIndex'
import PlaceDetails from './places/PlaceDetails'
// import Navigation from './Navigation'
import Error404 from './Error404'
import NewPlaceForm from './places/NewPlaceForm'
// import EditPlaceForm from './places/EditPlaceForm'
import SignUpForm from './users/SignUpForm'
import LoginForm from './users/LoginForm'
import BookingConfirmation from "./views/BookingConfirmation";
// import CurrentUserProvider from './contexts/CurrentUser'
import history from "./utils/history";

function App() {
  
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
      // Create PaymentIntent as soon as the page loads
      fetch("/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
      })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret));
    }, []);
  
    const appearance = {
      theme: 'stripe',
    };
    const options = {
      clientSecret,
      appearance,
    };
    

    const stripePromise = loadStripe('pk_test_51MCMpEDgvtVeLkvlg5QZVDxzNjXeuRp5rSdwZgkrfnBpL6cZTJHk6B7YetrW779cBJ7uye7WpSPr3TEOcVBZwji500XrTaMQsl');
    
    return (
    // <CurrentUserProvider>
      <Router history={history}>
      <div id="app" className="d-flex flex-column h-100">
      
        {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>        
      )}
      </ div>
       
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/booking" component={Booking} />
          <Route exact path="/sign-up" component={SignUpForm} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/places" component={PlaceIndex} />
          <Route exact path="/places/new" component={NewPlaceForm} />
          <Route exact path="/places/:placeId" component={PlaceDetails} />
          <Route path='/BookingConfirmation' component={BookingConfirmation} />
          <Route path="/" component={Error404} />
        </Switch>
      </Router>
      // </CurrentUserProvider>
  );
}

export default App;
