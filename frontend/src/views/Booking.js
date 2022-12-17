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
	<h1>BOOK YOUR TOUR</h1>
	<div className="tours_banner">
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