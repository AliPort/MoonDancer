import React, { useState, useEffect } from "react";
import { Route, Router, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

// import CheckoutForm from "./components/stripe/CheckoutForm"
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./views/Home";
import Fish from "./views/Fish";
import history from "./utils/history";
import Booking from './views/Booking'
import Error404 from './views/Error404'
import About from './views/About'
import BookingConfirmation from "./views/BookingConfirmation";

// styles
import "./App.css";

// fontawesome
import initFontAwesome from "./utils/initFontAwesome";
initFontAwesome();

const App = ({ children }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    // Fetch some data here and update the state using setData
  }, []);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
  <Router history={history}>
    <div id="app" className="d-flex flex-column h-100">
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route exact path="/fish" component={Fish} />
        <Route exact path="/about" component={About} />
        <Route exact path="/booking" component={Booking} />
        <Route path='/BookingConfirmation' component={BookingConfirmation} />
        <Route path="/" component={Error404} />
      </Switch>
      <Footer />
    </div>
  </Router>
</LocalizationProvider>
  );
}

export default App;