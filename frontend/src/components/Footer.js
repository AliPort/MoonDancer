import React from "react";
import github from "../assets/github.png"
import AskTheCaptain from "./AskTheCaptain";
import Icon from '../assets/moondancericon.png'

const Footer = () => (
  <footer className="text-center text-lg-start bg-white text-muted">
    {/* FOOTER COLUMNS */}
    <section className="">
      <div className="container text-center text-md-start mt-5">
        <div className="row mt-3">
          {/* ASK THE CAPTAIN */}
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold mb-4">
              <i class="fas fa-gem me-3"></i>MoonDancer
            </h6>
            <div id="AskDiv">
              <AskTheCaptain/>
            </div>
          </div>
          {/* SITEMAP */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">
              SITEMAP
            </h6>
            <p>
              <a className="text-reset" href="/">HOME</a>
            </p>
            <p>
              <a className="text-reset" href="/about">ABOUT</a>
            </p>
            <p>
              <a className="text-reset" href="/booking">CHARTERS & TOURS</a>
            </p>
            <p>
              <a className="text-reset" href="/fish">FISH INDEX</a><br/>
            </p>
          </div>
          {/* WHILE YOU'RE IN TOWN */}
          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold mb-4">
            While You're in Town
            </h6>
            <p>
              <a href="https://www.visitflorida.com/" class="text-reset" target="blank">Visit Florida</a>
            </p>
            <p>
              <a href="https://www.visitflorida.com/listing/wakulla-diving-center/29406/" class="text-reset" target="blank">Wakulla Diving Center</a>
            </p>
            <p>
              <a href="https://crumsminimall.com/" class="text-reset" target="blank">Crum's Mini Mall</a>
            </p>
            <p>
              <a href="https://gulfspecimen.org/" class="text-reset" target="blank">Gulf Specimen Marine Laboratories</a>
            </p>
          </div>
          {/* CREDITS */}
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 class="text-uppercase fw-bold mb-4">Credits</h6>
            <p>
              <a href="https://github.com/AliPort" target="blank">Alita Portillo</a>
            </p>
            <p>
              <a href="https://github.com/EPtackArts" target="blank">Elizabeth Ptack</a>
            </p>
            <p>
              <a href="https://github.com/BarbarianWizard" target="blank">Kevin Beck</a>
            </p>
            <p>
              <a href="https://github.com/wms09291963" target="blank">Captain William Smith</a>
            </p>
          </div>
        </div>
      </div>  
    </section>
    {/* FOOTER COPYRIGHT SECTION */}
    <div class="text-center p-4">
      <img src={Icon}alt="moondancer logo icon"/>
        © 2022 Copyright: MoonDancer LLC.
        <a href='https://github.com/AliPort/MoonDancer' target="blank">Check out our code!<img id="github_logo" src={github} alt="github logo"/></a>
    </div>
  </footer>
);

export default Footer;