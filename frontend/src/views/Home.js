import React, { Fragment } from "react";

const Home = () => {
 
  return (
    <Fragment>
      <h1>MoonDancer Boat Charters</h1>
      <img className="banner_photo" src="../assets/FullLogo.jpg" alt="Moondancer: Where memories are made!" />
      <a className="book_trip" href="/booking">BOOK YOUR TOUR TODAY</a>
      {/* I was thinking that the title and the button could be 
      laid out on top of the photo - similar to the Florida Sport Fishing site */}
      <p>Enjoy the fishing trip  of a lifetime in beautiful Apalachee Bay, Port of Panacea, Florida! This incredible fishing destination offers some of the finest eating fish and a thrill you wont forget. From Apalachee Bay to AlligatorPoint to the deep blue ocean we have the knowledge and experience to make your fishing dreams come true ~ Moondancer</p>
    </Fragment>
  )
};

export default Home;
