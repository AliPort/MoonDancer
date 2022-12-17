import React from "react";
import FullLogo from '../assets/FullLogo.jpg'

const Home = () => {
 
  return (
    <header className="masthead">
      <div className="container h-100">
          <img className="img-fluid" src={FullLogo} alt="Moondancer Logo"/>
          <button type="button" className="btn-block"><a className="booking" href="/booking"><h1>BOOK YOUR TOUR TODAY</h1></a></button>
      </div>
    </header>
  )
};

export default Home;
