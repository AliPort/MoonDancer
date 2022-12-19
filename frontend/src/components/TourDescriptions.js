import Eggs from "../assets/cook'n on the water gallery pic.jpeg"
import Interior from "../assets/spacious comfortable seating with sink on deck.jpeg"
import View from "../assets/spectacular views.jpeg"

import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';


const TourDescriptions = () => {
    return (
    <Container>
        <div>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header >
                        <div className="tourpicbox">
                        <img className="tourpic" src={Eggs} width="175px" alt='pan of eggs being cooked out on the open open'/>
                        </div>
                        <h1 id="bayautofill">Bay Fishing</h1>
                        </Accordion.Header>
                    <Accordion.Body>
                        <p>Fish for Yellowtail Snapper, Mangrove Snapper, Mutton Snapper, Grouper, Mackerel, Kingfish. 
                            Mostly inshore sometimes we go a little offshore.</p>
                        <h2>Tour Details</h2>
                        <p>Max 4 Anglers</p>
                        <h3>Half Day Tour</h3>
                        <p>8am-12pm ~or~ 1pm-5pm</p>
                        <p>$400</p>
                        <h3>Full Day Tour</h3>
                        <p>8am-6pm</p>
                        <p>$700</p>
                        <button className="baybtn btn-primary" type="button"><a href="#booknow">BOOK A BAY TOUR!</a></button>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                    <div className="tourpicbox">
                    <img className="tourpic" src={Interior} width="175px" alt="charter interior"/>
                    </div>
                    <h1 id="riverautofill">River Fishing</h1>
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>DESCRIPTION PLACEHOLDER</p>
                        <h2>Tour Details</h2>
                        <p>Max 4 Anglers</p>
                        <h3>Half Day Tour</h3>
                        <p>8am-12pm ~or~ 1pm-5pm</p>
                        <p>$400</p>
                        <h3>Full Day Tour</h3>
                        <p>8am-6pm</p>
                        <p>$700</p>
                        <button className="riverbtn btn-primary" type="button"><a href="#booknow">BOOK A RIVER TOUR!</a></button>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>
                        <div>
                        <img className="tourpic" src={View} width="175px" alt="view of the ocean and a mountain from the charter"/>
                        </div>
                        <h1 className="oceanautofill">Open Ocean Fishing</h1>
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>Fish for Swordfish, a prized catch in the Florida Keys! Trips are weather permitting. Also have a chance to catch Mahi Mahi & Blackfin Tuna</p>
                        <p>Catch the fish of a lifetime!</p>
                        <h2>Tour Details</h2>
                        <p>Max 4 Anglers</p>
                        <h3>Half Day Tour</h3>
                        <p>8am-12pm ~or~ 1pm-5pm</p>
                        <p>$625</p>
                        <h3>Full Day Tour</h3>
                        <p>8am-6pm</p>
                        <p>$1,000</p>
                        <button className="oceanbtn btn-primary" type="button"><a href="#booknow">BOOK AN OCEAN TOUR!</a></button>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    </Container>
    )
}

export default TourDescriptions;