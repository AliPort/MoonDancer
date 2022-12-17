import React from "react";
import { Dayjs } from 'dayjs';
import { TextField } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

class BookingInfo extends React.Component {
	state = {
	value: null,
	};
	
	render() {
	return(
	<main>
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
    <form action="/bookingconfirmation">
  	    <label htmlFor="time_of_day">When should we fish?</label>
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
        <div className="guests">
		    <h3>Bring your friends!</h3>
		    <p>Max 4</p>
		    <label htmlFor="guests">Party Size</label>
		    <select id="guests">
  			    <option value="1">Just me!</option>
  			    <option value="2">2</option>
  			    <option value="3">3</option>
  			    <option value="4">4</option>
		    </select>
	    </div>
			<input type="submit" value="BOOK TRIP"/>
        </form>
	</main>
);
}}

export default BookingInfo;