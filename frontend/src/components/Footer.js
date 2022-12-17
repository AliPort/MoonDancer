import React from "react";
import FullLogo from '../assets/FullLogo.jpg';
import github from "../assets/github.png"
import AskTheCaptain from "./AskTheCaptain";

const Footer = () => (
  <footer className="bg-light p-3 text-center">
    <img src='../../public/favicon.ico' alt="moondancer logo icon"/>
    <h6>SITEMAP</h6>
      <a className="site_map" href="/">HOME</a><br/>
      <a className="site_map" href="/about">ABOUT</a><br/>
      <a className="site_map" href="/booking">CHARTERS & TOURS</a><br/>
      <a className="site_map" href="/fish">FISH INDEX</a><br/>
    <img src={FullLogo}  alt="company logo" />; 
    <h1>MoonDancer Boat Charters</h1>
    <AskTheCaptain/>
    <p>
      © 2022 MoonDancer Boat Charters Designed by <a href="https://github.com/AliPort">Alita Portillo</a>, 
      <a href="https://github.com/EPtackArts"> Elizabeth Ptack</a>, 
      <a href="https://github.com/BarbarianWizard"> Kevin Beck</a>, and
      <a href="https://github.com/wms09291963"> Captain William Smith  </a>
      <br/>
      <a href='https://github.com/AliPort/MoonDancer'>Check out our code!<img id="github_logo" src={github} alt="github logo"/></a>
    </p>
  </footer>
);

<link to={{ pathname: "https://www.visitflorida.com/listing/wakulla-diving-center/29406"}} target="_blank" />

export default Footer;