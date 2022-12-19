import React, { Fragment } from "react";
import RockSeaBass from "../assets/Rock Sea Bass.jpg"
import GulfFlounder from "../assets/gulf flounder.jpeg"

const Fish = () => {
  return (
  <Fragment>
    <div className="card-wrapper">
      <div id="card-1" class="card card-rotating text-center">
        <div className="face front">
          <div className="card-up">
            <img class="card-img-top" src={RockSeaBass} alt="Rock Sea Bass"/>
          </div>
          <div className="card-body">
            <h2>Rock Sea Bass</h2>
            <a class="rotate-btn" data-card="card-1"><i class="fas fa-redo-alt"></i> Click here to rotate</a>
          </div>
        </div>
        <div className="face back">
          <div className="card-body">
            <h3>Appearance</h3>
            <ul>
              <li>Olive-bronze on back, fading to a lighter belly</li>
              <li>Black blotches from vertical bars on sides</li>
              <li>Dark black spot near middle of dorsal fin base</li>
              <li>Tip of lower jaw is purple</li>
              <li>Head and fins with bright blue and orange markings</li>
              <li>Adults have tail with three lobes and elongated dorsal filaments</li>
              <li>Top of head -  nape - is fully-scaled</li>
            </ul>
            <h3>Similar Species</h3>
            <p>Bank sea bass, C. ocyurus - black spot near middle of dorsal fin base and nape lacks scales.</p>
            <h3>Size</h3>
            <p>Rarely more than 10 inches in lenght</p>
            <h3>Habitat</h3>
            <ul>
              <li>Costal waters ver hard bottom areas</li>
              <li>Also found near sand or mud bottoms</li>
            </ul>
            <h3>Behavior</h3>
            <ul>
              <li>Spawn January through March</li>
              <li>Young adults are predominantly female and transform into males as they grow older.</li>
            </ul>
            <a className="rotate-btn" data-card="card-1"><i className="fas fa-undo"></i>Click here to roate back</a>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
  )
};

export default Fish;
