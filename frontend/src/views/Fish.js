import React from "react";
import RockSeaBass from "../assets/Rock Sea Bass.jpg"
import GulfFlounder from "../assets/gulf flounder.jpeg"

const Fish = () => {
  return (
    <main>
    <div className="row">
    <div className="column">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={GulfFlounder} alt="Avatar" width="200px"/>
            <h3>Gulf FLounder</h3>
          </div>
          <div className="flip-card-back">
            <h1>John Doe</h1>
            <p>Architect & Engineer</p>
            <p>We love that guy</p>
          </div>
        </div>
      </div>
    </div>
    <div className="column">
    <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={GulfFlounder} alt="Avatar" width="200px"/>
            <h3>Gulf</h3>
          </div>
          <div className="flip-card-back">
            <h1>John Doe</h1>
            <p>Architect & Engineer</p>
            <p>We love that guy</p>
          </div>
        </div>
      </div>
  </div>
  <div className="column">
  <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={GulfFlounder} alt="Avatar" width="200px"/>
            <h3>Gulf</h3>
          </div>
          <div className="flip-card-back">
            <h1>John Doe</h1>
            <p>Architect & Engineer</p>
            <p>We love that guy</p>
          </div>
        </div>
      </div>
  </div>
    </div>
    </main>
  )
};

export default Fish;
