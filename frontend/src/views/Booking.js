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
		  <p>Come and explore a range of exciting fishing with MoonDancer Charters. Based out of the sleepy fishing village Port of Panacea, FL, you’ll have access to several kinds of fishing - open ocean, bay fishing, and river fishing. The fishing is hot year-round, and Captain Will brings a lifetime of experience on the water - not to mention the most recent Garmin fish finding and GPS technology! Boating since the age of 16, Captain Will has always put safety first, utilizing the most recent Garmin GPS, weather, and storm radar technology to steer clear from squalls, and other bad weather.</p>
          <p>Head out to sea aboard 'MoonDancer’, a very comfortable 24' Sea Ray Sundancer with a deep vee. Unlike other fishing boats, MoonDancer is equiped with a full galley, refrigerator/freezer, and shower/head, along with a another sink and grill on deck. Captain Will has the capability to clean and grill your catch right on the boat if you're too hungry to wait to get to the dock! Bring your own drinks and snacks to put in the captain’s cooler – just also bring an ice box for your catch.</p>
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
      <div class="fish3box">
         <div class = "imgForBox">
            <img src="../assets/cook'n on the water gallery pic.JPG" width="175px"/>
         </div>
        </div> 
	  <h3>Half Day</h3>
	  <h2>Bay Fishing</h2>
       	  <p>Fish for Yellowtail Snapper, Mangrove Snapper, Mutton Snapper, Grouper, Mackerel, Kingfish. Mostly inshore sometimes we go a little offshore.</p> 
          <p>up to 4 Anglers</p>
		  <h2>AM/PM 4 Hour Trip</h2>
		  <h3>8am - 12pm / 1pm - 5pm</h3>
		  <h4>$400</h4>
		  <button onclick="bookhalfBayfish()">Book Now</button>
    </div>

    <div class="col">
      <div class="fish4box">
        <div class = "imgForBox">
        <img src="../assets/Rock Sea Bass.jpg" width="175px"/>
      </div>
	</div>
	  <h3>Full Day</h3>
      <h2>Bay Fishing</h2>
	  <p>Fish for Yellowtail Snapper, Mangrove Snapper, Mutton Snapper, Grouper, Mackerel, Kingfish. Mostly inshore sometimes we go a little offshore.</p> 
          <p>up to 4 Anglers</p>
		  <h2>AM 10 Hour Trip</h2>
		  <h3>8am - 6pm</h3>
      	  <h4>$700</h4>
		  <button onclick="bookfullBayfish()">Book Now</button>
    </div>

    <div class="col">
      <div class= "fish5box">
        <div class = "imgForBox">
            <img src="../assets/Rock Sea Bass.jpg" width="175px"/>
        </div>
    </div> 

	<h3>Half Day</h3>      
	<h2>River Fishing</h2>
      
	  <h4>$400</h4>
        
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
 
  
  
  
  
  