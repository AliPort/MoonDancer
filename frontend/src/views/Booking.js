import React from 'react';
import BookingInfo from '../components/BookingInfo';
import Eggs from "../assets/cook'n on the water gallery pic.jpeg"
import Interior from "../assets/spacious comfortable seating with sink on deck.jpeg"
import View from "../assets/spectacular views.jpeg"
import { Container } from 'reactstrap';


class Booking extends React.Component {

	componentDidMount() {
	this.Tours();
};

Tours() {
	const coll = document.getElementsByClassName("collapsible");
	var i;
	for (i = 0; i < coll.length; i++) {
		coll[i].addEventListener("click", function() {
		this.classList.toggle("active");
		var content = this.nextElementSibling;
		if (content.style.maxHeight){
			content.style.maxHeight = null;
		} else {
			content.style.maxHeight = content.scrollHeight + "px";
		}
		});
	};
};

render() {
	return (
	<Container>
	<main>
	<div class="container my-5">
		<section>
			<div class="card mb-2">
				<div class="row">
					<div class="p-5 align-self-center">
					<p>Come and explore a range of exciting fishing with MoonDancer Charters. 
						Based out of the sleepy fishing village Port of Panacea, FL, you'll have access to 
						several kinds of fishing - open ocean, bay fishing, and river fishing. The fishing is hot 
						year-round, and Captain Will brings a lifetime of experience on the water - not to mention 
						the most recent Garmin fish finding and GPS technology! Boating since the age of 16, Captain 
						Will has always put safety first, utilizing the most recent Garmin GPS, weather, and storm 
						radar technology to steer clear from squalls, and other bad weather.</p>
					<p>Head out to sea aboard 'MoonDancer', a very comfortable 24' Sea Ray Sundancer with a deep vee. 
						Unlike other fishing boats, MoonDancer is equiped with a full galley, refrigerator/freezer, 
						and shower/head, along with a another sink and grill on deck. Captain Will has the capability 
						to clean and grill your catch right on the boat if you're too hungry to wait to get to the 
						dock! Bring your own drinks and snacks to put in the captain's cooler - 
						just also bring an ice box for your catch.</p>
					</div>
				</div>
			</div>
		</section>
	</div>	  
	<div className="selection">
		<button className="collapsible">
			<h2>Bay Fishing</h2>
			<img src={Eggs} width="175px" alt='pan of eggs being cooked out on the open open'/>
		</button>
		<div className="content">
			<p>Fish for Yellowtail Snapper, Mangrove Snapper, Mutton Snapper, Grouper, Mackerel, Kingfish. Mostly inshore sometimes we go a little offshore.</p> 
			<p>up to 4 Anglers</p>
			<h4>Half Day Tours - $400</h4>
			<p>8am - 12pm / 1pm - 5pm</p>
			<h4>Full Day Tour - $700</h4>
			<p>8am - 6pm</p>
		</div>
	</div>
	<div className="selection">
		<button className="collapsible">
			<h2>River Fishing</h2>
			<img src={Interior} width="175px" alt="charter interior"/>
		</button>
		<div className="content">
			<p>TOUR DESCRIPTION</p>
			<p>up to 4 Anglers</p>
			<h4>Half Day Tours - $400</h4>
			<p>8am - 12pm / 1pm - 5pm</p>
			<h4>Full Day Tour - $700</h4>
				<p>8am - 6pm</p>
		</div>
	</div>
	<div className="selection">
		<button className="collapsible">
			<h2>Open Ocean Fishing</h2>
			<img src={View} width="275px" alt="view of the ocean and a mountain from the charter"/>
		</button>
		<div className="content">
			<p>Fish for Swordfish, a prized catch in the Florida Keys! Trips are weather permitting. Also have a chance to catch Mahi Mahi & Blackfin Tuna</p>
			<p>Catch the fish of a lifetime!</p>
			<p>up to 4 Anglers</p>
			<h4>Half Day Tours - $625</h4>
			<p>8am - 12pm / 1pm - 5pm</p>
			<h4>Full Day Tour - $1000</h4>
			<p>8am - 6pm</p>
		</div>
	</div>
	<BookingInfo />
	</main>
	</Container>
	);
};
}

export default Booking;