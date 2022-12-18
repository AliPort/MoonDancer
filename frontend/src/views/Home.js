import React from "react";
import FullLogo from '../assets/FullLogo.jpg'

const Home = () => {
 
  return (
    <header className="masthead">
      <div className="container h-100">
        <img className="img-fluid" src={FullLogo} alt="Moondancer Logo"/>
        <button className="btn btn-primary" type="button" href="/booking">BOOK YOUR TOUR TODAY!</button>
      </div>
    </header>
  )
};

export default Home;