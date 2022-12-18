import React from 'react';
import BookingInfo from '../components/BookingInfo';
import { Container } from 'reactstrap';
import TourDescriptions from '../components/TourDescriptions';

function Booking() {
	return (
	<Container>
	<main>
	<div className="container my-5">
 		<section>
 			<div className="card mb-2">
 				<div className="row">
 					<div className="p-5 align-self-center">
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
	<TourDescriptions/>
	<BookingInfo />
	</main>
	</Container>
	);
	};

export default Booking;