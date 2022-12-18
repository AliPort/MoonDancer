import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Captain from '../assets/Captain in a wet suit.jpeg'

function About() {
	return (
	  <main>
		 <Container>
		 <h1>ABOUT</h1>
           <Row>
             <Col><img id="captn"
		        src={Captain} />
			 </Col>

             <Col><h2>25 Years of Boating Experience</h2>
		          <h2>Captain Will Smith</h2>
		          <p>I grew up on a residential lake as a kid. I think I was boating before I was driving. Boating has always been a part of my life, and has created many fond memories with friends and family. I've always enjoyed fishing, snorkeling, and swimming off the boat, as well as sharing the experie66nce with others. For some time now I have toyed with the idea of starting my own charter service. Well, the time has come! I've taken the plunge! I'm here to provide these same experiences in the Northern Florida</p>
			 </Col>
				   
	       </Row>
	 </Container>
	 </main>
       
	);
  }
  
  export default About;
  