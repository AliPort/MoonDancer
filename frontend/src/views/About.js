import Captain from '../assets/Captain in a wet suit.jpeg'
import React from 'react';

function About() {
	return (
		<div className="container my-5">
			<section>
				<div className="card mb-3">
      				<div className="row">
						<div className="col-md-6">
          					<img id="cap" width="500px;" src={Captain} alt="Captain Will Smith in a wet suit"/>
							<button className="aboutbtn btn-primary" type="button"><a href="/booking">SET SAIL WITH CAPTAIN SMITH!</a></button>
						</div>
						<div className="col-md-6 p-5 align-self-center">
							<h1>Captain Will Smith</h1>
							<h3 className="font-weight-normal mb-3">25 Years of Boating Experience</h3>
							<p className="about">I grew up on a residential lake as a kid. 
							I think I was boating before I was driving. Boating has always been a part of my life, 
							and has created many fond memories with friends and family. I've always enjoyed fishing, 
							snorkeling, and swimming off the boat, as well as sharing the experie66nce with others. 
							For some time now I have toyed with the idea of starting my own charter service. 
							Well, the time has come! I've taken the plunge! I'm here to provide these same experiences 
							in the Northern Florida</p>
						</div>
					</div>
				</div>
			</section>
		</div>	  
	);
  }
  
  export default About;
  