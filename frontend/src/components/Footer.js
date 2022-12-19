import React from "react";
import github from "../assets/github.png"
import AskTheCaptain from "./AskTheCaptain";
import Icon from '../assets/moondancericon.png'

const Footer = () => (
    <footer className="text-center text-lg-start text-dark">
      <section className="AskCapDiv">
        <div className="container text-center text-md-start mt-0">
          <div className="row mt-0">
          {/* ASK THE CAPTAIN */}
            <div className="col-md-10 col-lg-7 col-xl-7 mx-auto mt-4">
              <h6 className="text-uppercase fw-bold">Ask Captain William</h6>
              <hr className="mb-4 mt-0 d-inline-block mx-auto"/>
              <AskTheCaptain/>
            </div>
          {/* CONTACT & WHILE YOU'RE HERE */}
          <div id="footermid" className="col-md-3 col-lg-2 col-xl-2 ml-auto mt-4">
            <h6 className="text-uppercase fw-bold">Contact</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto"/>
            <p><a className="text-dark">Email</a></p>
            <p><a className="text-dark">Tel</a></p>
            <h6 className="text-uppercase fw-bold">While You're Here</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto"/>
            <p><a target="blank" href="https://www.visitflorida.com/" className="text-dark">Visit Florida</a></p>
            <p><a target="blank" href="https://www.visitflorida.com/listing/wakulla-diving-center/29406/" className="text-dark">Wakulla Diving Center</a></p>
            <p><a target="blank" href="https://crumsminimall.com/" className="text-dark">Crum's Mini Mall</a></p>
            <p><a target="blank" href="https://gulfspecimen.org/" className="text-dark">Gulf Specimen Marine Lab</a></p>
          </div>
          {/* SITEMAP & CREDITS */}
          <div className="col-md-3 col-lg-3 col-xl-2 mr-auto mt-4">
            <h6 className="text-uppercase fw-bold">Sitemap</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto"/>
            <p><a href="/" className="text-dark">HOME</a></p>
            <p><a href="/about" className="text-dark">ABOUT</a></p>
            <p><a href="/booking" className="text-dark">BOOK YOUR TOUR</a></p>
            <p><a href="/fish" className="text-dark">FISH INDEX</a></p>
            <h6 className="text-uppercase fw-bold">Credits</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto"/>
            <p><a target="blank" href="https://github.com/AliPort" className="text-dark">Alita Portillo</a></p>
            <p><a target="blank" href="https://github.com/EPtackArts" className="text-dark">Elizabeth Ptack</a></p>
            <p><a target="blank" href="https://github.com/BarbarianWizard" className="text-dark">Kevin Beck</a></p>
            <p><a target="blank" href="https://github.com/wms09291963" className="text-dark">Captain Will Smith</a></p>
            <p><a target="blank" href="https://github.com/AliPort/MoonDancer" className="text-dark"><img src={github} width="30px" alt="github logo"/></a></p>
          </div>
        </div>
      </div>
    </section>
    <div id="bottomfoot" className="text-center p-3">
      <img id="iconfoot" src={Icon} width="60px" alt="Moondancer Icon"/> © 2022 Copyright: MoonDancer Boat Charters - All Rights Reserved
    </div>
  </footer>
);

export default Footer;