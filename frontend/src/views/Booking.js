import React from 'react';
import BookingInfo from '../components/BookingInfo';

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
	<main>
	<div className="bookie">
		<h1>BOOK YOUR TOUR</h1>
	</div>
	<div className="tours_banner">
		<div class="topTour">
			<p>Come and explore a range of exciting fishing with MoonDancer Charters. Based out of the sleepy fishing village Port of Panacea, FL, you’ll have access to several kinds of fishing - open ocean, bay fishing, and river fishing. The fishing is hot year-round, and Captain Will brings a lifetime of experience on the water - not to mention the most recent Garmin fish finding and GPS technology! Boating since the age of 16, Captain Will has always put safety first, utilizing the most recent Garmin GPS, weather, and storm radar technology to steer clear from squalls, and other bad weather.</p>
        	<p>Head out to sea aboard 'MoonDancer’, a very comfortable 24' Sea Ray Sundancer with a deep vee. Unlike other fishing boats, MoonDancer is equiped with a full galley, refrigerator/freezer, and shower/head, along with a another sink and grill on deck. Captain Will has the capability to clean and grill your catch right on the boat if you're too hungry to wait to get to the dock! Bring your own drinks and snacks to put in the captain’s cooler – just also bring an ice box for your catch.</p>
		</div>
		<div className="selection">
		<button className="collapsible">
			<h2>Bay Fishing</h2>
				<h3>PLACEHOLDER FOR AN IMAGE</h3>
			</button>
			<div className="content">
  				<p>INFORMATION ABOUT THE TOUR</p>
			</div>
		</div>
		<div className="selection">
			<button className="collapsible">
				<h2>River Fishing</h2>
				<h3>PLACEHOLDER FOR AN IMAGE</h3>
			</button>
			<div className="content">
  				<p>INFORMATION ABOUT THE TOUR</p>
			</div>
		</div>
		<div className="selection">
			<button className="collapsible">
				<h2>Open Ocean Fishing</h2>
				<h3>PLACEHOLDER FOR AN IMAGE</h3>
			</button>
			<div className="content">
  				<p>INFORMATION ABOUT THE TOUR</p>
			</div>
		</div>
	</div>
	<BookingInfo />
	</main>
	);
};
}

export default Booking;