import Captain from '../assets/Captain in a wet suit.jpeg'

function About() {
	return (
		<div class="container my-5">
			<section>
				<div class="card mb-3">
      				<div class="row">
						<div class="col-md-5">
          					<img id="cap" width="500px;" src={Captain} alt="Photo of Captain Will Smith in a wet suit"/>
        				</div>
						<div class="col-md-6 p-5 align-self-center">
							<h1>Captain Will Smith</h1>
							<h3 class="font-weight-normal mb-3">25 Years of Boating Experience</h3>
							<p class="about">I grew up on a residential lake as a kid. 
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
  