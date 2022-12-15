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
	
	componentDidMount() {
		this.Tours();
	}

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
		}
	}

	render() {
	return (
	<main>
	<h1>BOOK YOUR TOUR</h1>
	<div className="booking_div">
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
	</div>
	<div className="tours_banner">
		<div class="selection">
			<button className="collapsible">
				<h2>Bay Fishing</h2>
				<h3>PLACEHOLDER FOR AN IMAGE</h3>
				<form>
  					<label for="time_of_day">When should we fish?</label>
  					<select name="time_of_day" id="time_of_day">
    				<optgroup label="Half Day $400">
      					<option value="morning">Morning</option>
      					<option value="afternoon">Afternoon</option>
    				</optgroup>
    					<optgroup label="Full Day $700">
      					<option value="full_day">Full Day</option>
    				</optgroup>
  					</select>
					<br/>
  				<input type="submit" value="Submit"/>
				</form>
			</button>
			<div className="content">
  				<p>INFORMATION ABOUT THE TOUR</p>
			</div>
		</div>
		<div class="selection">
			<button className="collapsible">
				<h2>River Fishing</h2>
				<h3>PLACEHOLDER FOR AN IMAGE</h3>
				<form>
  					<label for="time_of_day">When should we fish?</label>
  					<select name="time_of_day" id="time_of_day">
    				<optgroup label="Half Day $400">
      					<option value="morning">Morning</option>
      					<option value="afternoon">Afternoon</option>
    				</optgroup>
    					<optgroup label="Full Day $700">
      					<option value="full_day">Full Day</option>
    				</optgroup>
  					</select>
					<br/>
  				<input type="submit" value="Submit"/>
				</form>
			</button>
			<div className="content">
  				<p>INFORMATION ABOUT THE TOUR</p>
			</div>
		</div>
		<div class="selection">
			<button className="collapsible">
				<h2>Ocean Fishing</h2>
				<h3>PLACEHOLDER FOR AN IMAGE</h3>
				<form>
  					<label for="time_of_day">When should we fish?</label>
  					<select name="time_of_day" id="time_of_day">
    				<optgroup label="Half Day $400">
      					<option value="morning">Morning</option>
      					<option value="afternoon">Afternoon</option>
    				</optgroup>
    					<optgroup label="Full Day $700">
      					<option value="full_day">Full Day</option>
    				</optgroup>
  					</select>
					<br/>
  				<input type="submit" value="Submit"/>
				</form>
			</button>
			<div className="content">
  				<p>INFORMATION ABOUT THE TOUR</p>
			</div>
		</div>
	</div>
	<div className="guests">
		<h2>Bring your friends!</h2>
		<p>Max 4</p>
		<label for="guests">Party Size</label>
		<select id="guests">
  			<option value="1">Just me!</option>
  			<option value="2">2</option>
  			<option value="3">3</option>
  			<option value="4">4</option>
		</select>
	</div>
	</main>
	);
	}
}

export default Booking;