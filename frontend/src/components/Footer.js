import React from "react";
import github from "../assets/github.png"
import AskTheCaptain from "./AskTheCaptain";
import Icon from '../assets/moondancericon.png'

const Footer = () => (
  <div className="footerDiv">
  <footer className="text-center text-lg-start bg-light text-muted">
    {/* FOOTER COLUMNS */}
    <section className="">
      <div className="container text-center text-md-start mt-3">
        <div className="row mt-3">
          {/* ASK THE CAPTAIN */}
          <div className="col-md-3 col-lg-4 col-xl-6 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold mb-4">
              <i class="fas fa-gem me-3"></i>Ask Captain William
            </h6>
            <div id="AskDiv">
              <AskTheCaptain/>
            </div>
          </div>
          {/* CONTACT & WHILE YOU'RE IN TOWN */}
          <div id="florida" class="col-md-3 col-lg-2 col-xl-3 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold mb-4">
            Contact
            </h6>
            <p>
              <a class="text-reset" target="blank">E-mail: </a>
            </p>
            <p>
              <a class="text-reset" target="blank">Tel: </a>
            </p>
            <h6 class="text-uppercase fw-bold mb-4">
            While You're Here
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
              <a href="https://gulfspecimen.org/" class="text-reset" target="blank">Gulf Specimen Marine Lab</a>
            </p>
          </div>
          {/* SITE MAP & CREDITS */}
          <div id="sitemap" class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
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
            <br/>
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
      <img src={Icon}alt="moondancer logo icon" width="60px"/> © 2022 Copyright: MoonDancer Boat Charters - All Rights Reserved<br/>
      Check out our code! <a href='https://github.com/AliPort/MoonDancer' target="blank"><img src={github} alt="github logo" width="40px"/></a>
    </div>
  </footer>
  </div>
);

export default Footer;