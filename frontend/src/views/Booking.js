import React from 'react';
import { Dayjs } from 'dayjs';
import { TextField } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

class Booking extends React.Component {
	state = {
	  value: null,
	};
  
	render() {
	  return ( 
		<main>
			<div class="bookie">
			 <h1>Book a Tour!</h1>
			</div>
			
 		<div class="topTour">
		  <p>Come and explore a range of exciting fishing with Outlaw Sport Fishing. Based out of Marathon, FL you’ll have access to several kinds of fishing. Flats, reefs, and the deeper waters are just on your doorstep. The fishing is hot year-round, and Captain Brad Picariello carried with him a lifetime’s experience on the waters. Running charters since the age of 16, he’s also a prominent tournament angler, and is always looking for the next prized catch.</p>
          <p>Head out to sea aboard a 40’ D&A Custom Sport fisherman. A versatile vessel, she’s suited to all kinds of fishing. While 4 people can fish at once, there’s plenty of space for 2 more to relax and enjoy the tropical scenery. Bring your own drinks and snacks to put in the captain’s cooler – just also bring an ice box for your catch. Powered by twin 480 HP Cummins engines, and with the onboard fishfinder and GPS, you’ll hit the sweet spots right away.</p>
		</div>
		  <div class="container">
        <div class="row">
        <div class="col">
          <div class="fish1box">
            <div class = "imgForBox">
            <img src="../assets/Spacious comfortable seating with sink on deck.JPG" width="175px"/>
          </div>
         </div> 
		  <h3>Half Day</h3>
          <h2>Open Ocean Fishing</h2>
            <p>Fish for Swordfish, a prized catch in the Florida Keys! Trips are weather permitting.Also have a chance to catch Mahi Mahi & Blackfin Tuna</p>
            <p>Catch the fish of a lifetime!</p>
		    <p>up to 4 Anglers</p>
			<h2>AM/PM 4 Hour Trip</h2>
			<h3>8am - 12pm / 1pm - 5pm</h3>
		  <h4>$625</h4>
		  <button onclick="bookhalfOpenOcean()">Book Now</button>
        </div>
        <div class="col">
          <div class="fish2box">
            <div class = "imgForBox">
              <img src="../assets/spectacular views.JPG" width="275px"/>
          </div>
         </div> 
         <h3>Full Day</h3>
		 <h2>Open Ocean Fishing</h2>
		   <p>Fish for Swordfish, a prized catch in the Florida Keys! Trips are weather permitting. Also have a chance to catch Mahi Mahi & Blackfin Tuna</p>
           <p>Catch the fish of a lifetime!</p>
           <p>up to 4 Anglers</p>
		   <h2>AM 10 Hour Trip</h2>
		   <h3>8am - 6pm</h3>
  		   <h4>$700</h4>
		   <button onclick="bookfullOpenOcean()">Book Now</button> 
        </div>
    <div class="col">
      <div class="fish1box">
         <div class = "imgForBox">
            <img src="../assets/Rock Sea Bass.jpg" width="175px"/>
          </div>
         </div> 
		 
      <h2> Bay Fishing</h2>
       <h3>Half Day</h3>
	   <h4>$400</h4>
        <ul>
          Back is bluish-green, fading to silvery sides and belly
          Irregular golden-yellow spots on sides
          Bluish-black blotch on front of first dorsal fin
          Lateral line slopes gently from behind the gill cover to the tail
        </ul>
      <h3>Similar Species</h3>
        <p>Cero, S. regalis - has yellowish stripe on sides; and king mackerel, S. cavalla - lateral line drops sharply below second dorsal fin</p>
    <h3>Size</h3>
     <p>Up to 36 inches</p>
      <h3>Habitat</h3>
      <p>Prevalent throughout Florida waters: inshore, offshore and nearshore. Frequently found over grass beds and reefs. Absent from north Florida waters in winter.</p>
      <h3>Behavior</h3>
      <p>Schooling fish that migrates northward in spring, returning to southerly waters when water temperature drops below 70 degrees F.  Spawn offshore from spring through summer.
        Feeds on small fishes and invertebrates.</p>
    </div>
    <div class="col">
    <div class="fish1box">
      <div class = "imgForBox">
        <img src="../assets/Rock Sea Bass.jpg" width="175px"/>
      </div>
      </div> 
      <h2>Bay Fishing</h2>
      <h3>Full Day</h3>
	  <h4>$700</h4>
      <p>Also known as ling or lemonfish.</p>
      <ul>   
        Long, slim fish with a broad, depressed head
        Brown in color, fading to a whitish belly
        Dark lateral stripe extending through eye to tail
        Lower jaw projects past upper jaw
        Young have alternating black and white horizontal stripes
      </ul> 
      <h3>Similar Species</h3>
        <p>Remora, E. naucrates - sucker disk present on top of head</p>
      <h3>Size</h3>
        <p>Up to 6 feet - 150 pounds; common from 10 to 50 pounds</p>
      <h3>Habitat</h3>
        <p>Cobia are found in nearshore and inshore waters with inlets and bays. Cobia are frequently found around buoys, pilings and wrecks in these areas.</p>
      <h3>Behavior</h3>
        <p>They spawn in spring and early summer. Feeds on crabs, squid and small fishes.</p>
    </div>
    <div class="col">
    <div class= "fish1box">
        <div class = "imgForBox">
            <img src="../assets/Rock Sea Bass.jpg" width="175px"/>
        </div>
    </div> 
      <h2>River Fishing</h2>
      <h3>Half Day</h3>
	  <h4>$400</h4>
        <p>Also known as whiting</p>
        <ul>Body is silvery all over, without dark marks
            First dorsal fin tip is often dusky-brown
            Caudal fin - tail - has a blackish tip
            Scales on underside are smaller than body scales
            Barbel on lower jaw
        </ul>
      <h4>Similar Species</h4>
        <p>Southern kingfish, M. americanus (caudal fin lacks a blackish tip); and northern kingfish, M. saxatilis (disting "V" mark above pectoral fins) </p>
        <h3>Size</h3>
         <p>Up to 18 inches</p>
      <h3>Habitat</h3>
      <p>Coastal waters; common in surf zones along beaches.</p>
      <h3>Behavior</h3>
      <p>Thought to prefer high wave action areas such as sand bars where the crashing waves dislodge and suspend small crabs and other small crustaceans. Feeds on fishes and invertabrates.      </p>
    </div>
    <div class="col">
     <div class="fish1box">
       <div class = "imgForBox">
            <img src="../assets/Rock Sea Bass.jpg" width="175px"/>
        </div>
      </div> 
      <h2>River Fishing</h2>
      <h3>Full Day</h3>
	  <h4>$700</h4>
       <p>Also known as Red Drum</p>
      <ul>
        Body is copper-bronze, fading to a lighter belly
        One or more dark, ocellated spots at base of tail (occasionally without spot)
        Lack barbels on lower jaw
        Large scales
        Powerful pharyngeal teeth used to crush oysters and other shellfish
      </ul>
      <h3>Similar Species</h3>
        <p>Black drum, P. cromis - has chin barbels and lacks spot on tail</p>
      <h3>Size</h3>
         <p>Up to 18 inches</p>
      <h3>Habitat</h3>
        <p>Coastal waters. In winter, redfish are found in seagrass, over muddy or sand bottoms, or near oyster bars or spring fed creeks.</p>
      <h3>Behavior</h3>
        <p>Juvenile redfish are an inshore species until they reach roughly 30 inches - around 4 years. They then migrate to the nearshore population.</p>
        <p>Prodigious spawners that produce tens of millions of eggs. Spawning season is from about August through December, in passes, inlets and lagoon estuaries around the state. During spawning season, redfish use special muscles rubbing against their air bladder to produce a "drumming" sound for which they are named.</p>
        <p>Feed on fishes and invertebrates.</p>
    </div>
  </div>
 </div>

		  <LocalizationProvider dateAdapter={AdapterDayjs}>
			<DatePicker
			  label="Select a Tour Date"
			  value={this.state.value}
			  onChange={(newValue) => {
				this.setState({ value: newValue });
			  }}
			  renderInput={(params) => <TextField {...params} />}
			/>
		  </LocalizationProvider>
		</main>
		
	  );
	}
  }
  
  export default Booking;
 
  
  
  
  
  