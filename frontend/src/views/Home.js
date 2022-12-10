import React, { Fragment } from "react";
import beached from '../assets/beached.JPG';

const Home = () => {
 
  return (
    <Fragment>
      <h1>HOME</h1>
      <h2>MoonDancer Boat Charters</h2>
      <img src={beached} alt="boat next to shoreline" />; 
        <p>Enjoy the fishing trip  of a lifetime in beautiful Apalachee Bay, Port of Panacea, Florida! This incredible fishing destination offers some of the finest eating fish and a thrill you wont forget. From Apalachee Bay to AlligatorPoint to the deep blue ocean we have the knowledge and experience to make your fishing dreams come true ~ Moondancer</p>

  </Fragment>

  )
  
  
  };

export default Home;
