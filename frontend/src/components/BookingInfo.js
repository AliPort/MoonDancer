
import React from "react";
import { withRouter } from 'react-router-dom';
import dayjs from 'dayjs';
import { TextField } from '@mui/material';
import { LocalizationProvider } from './MaterialUIPickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { DatePicker } from '@mui/x-date-pickers-pro/DatePicker';

// import { MaterialUI }
import axios from 'axios';

const tourPrices= {
	bay: {
		Morning: 400,
		Afternoon: 400,
		'All Day': 700,
	},
	river: {
		Morning: 400,
		Afternoon: 400,
		'All Day': 700,
	},
	ocean: {
		Morning: 625,
		Afternoon: 625,
		'All Day': 1000,
	},
};

class BookingInfo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		  value: null,
		  selectedOption: " ",
		  showAdditionalFields: false,
		  price: 0,
		  tourName: " ",
		  timeOfDay: " ",
		  tourDate: " "
		};

	this.handleTourNameChange = this.handleTourNameChange.bind(this);
	this.handleTimeOfDayChange = this.handleTimeOfDayChange.bind(this);
	this.handleOptionChange = this.handleOptionChange.bind(this);
	this.handleTourDateChange = this.handleTourDateChange.bind(this);

	}	

	handleTourNameChange = (event) => {
		this.setState({ tourName: event.target.value, price: tourPrices[event.target.value][this.state.timeOfDay] || 0 });
	}
	  // Length of Day
	handleTimeOfDayChange = (event) => {
		this.setState({ timeOfDay: event.target.value, price: tourPrices[this.state.tourName][event.target.value] || 0 });
	}

	handleTourDateChange = (event) => {
		this.setState({ tourDate: event.target.value});
    }
	  
	  
	handleOptionChange = (event) => {
		this.setState({
		  selectedOption: event.target.value,
		  showAdditionalFields: event.target.value !== " "
		});
	}

	handleSubmit = (event) => {
		event.preventDefault();
		const { tourName, timeOfDay , tourDate} = this.state;
		
		console.log('Request body:', { tourName, timeOfDay, tourDate });
		
		axios.post(`${process.env.REACT_APP_SERVER_URL}api/tours`, { tourName, timeOfDay, tourDate })
		  .then(response => {
			console.log('Response from backend:', response);
			if (response.status === 200) {
			  this.props.history.push('../views/BookingConfirmation.js');
			}
		  })
		  .catch(error => {
			console.error(error);
		  });
	  }
	  
	  
	  
	  
	  

	render() {
	return(
		<div className="container my-5">
    	<form id="booknow" action="/bookingconfirmation">
		<h1>Book your MoonDancer Tour</h1>
		<select required onChange={this.handleTourNameChange} >
				<option className="tourName" value= " " selected disabled>Select a Tour</option>
      			<option className="tourName" id="bayauto" value="bay">Bay Fishing</option>
      			<option className="tourName" id="riverauto" value="river">River Fishing</option>
      			<option className="tourName" id="oceanauto" value="ocean">Open Ocean Fishing</option> 
  	   		</select>
			<div className="booking_div" required onChange={this.handleTourDateChange} >
				<LocalizationProvider dateAdapter={AdapterDayjs}>
				<DesktopDatePicker
            label="Tour Date"
            inputFormat="MM/DD/YYYY"
            value={this.state.tourDate}
            onChange={this.handleTourDateChange}
            renderInput={(params) => <TextField {...params} />}
          />
		</LocalizationProvider>
			</div>
			<select required onChange={this.handleTimeOfDayChange} value={this.state.timeOfDay}>
				<option className="timeOfDay" value=" " selected disabled>Select a Time of Day</option>
      			<option className="timeOfDay" value="Morning">Half Day Morning</option>
      			<option className="timeOfDay" value="Afternoon">Half Day Afternoon</option>
      			<option className="timeOfDay"value="All Day">Full Day</option> 
  	   		</select>
	    	<br/>
        	<div className="guests">
		    	<h3 id="party">Party Size<br/></h3>
		    	<select value={this.state.selectedOption || ""} onChange={this.handleOptionChange} required>
  			    	<option value="1">Just me!</option>
  			    	<option value="2">2</option>
  			    	<option value="3">3</option>
  			    	<option value="4">4</option>
		    	</select>
				{this.state.showAdditionalFields && (
					<div>
						{this.state.selectedOption === "2" && (
							<div>
								<input type="text" placeholder="Your Guest's First Name"/>
								<input type="text" placeholder="Your Guest's Last Name"/>
								<input type="text" placeholder="Your Guest's E-mail"/>
							</div>
						)}
					{this.state.selectedOption === "3" && (
						<div>
							<label>GUEST 1</label><br/>
							<input type="text" placeholder="Your Guest's First Name"/>
							<input type="text" placeholder="Your Guest's Last Name"/>
							<input type="text" placeholder="Your Guest's E-mail"/><br/>
							<label>GUEST 2</label><br/>
							<input type="text" placeholder="Your Guest's First Name"/>
							<input type="text" placeholder="Your Guest's Last Name"/>
							<input type="text" placeholder="Your Guest's E-mail"/>
						</div>
					)}
					{this.state.selectedOption === "4" && (
						<div>
							<label>GUEST 1</label><br/>
							<input required type="text" placeholder="Your Guest's First Name"/>
							<input required type="text" placeholder="Your Guest's Last Name"/>
							<input required type="text" placeholder="Your Guest's E-mail"/><br/>
							<label>GUEST 2</label><br/>
							<input required type="text" placeholder="Your Guest's First Name"/>
							<input required type="text" placeholder="Your Guest's Last Name"/>
							<input required type="text" placeholder="Your Guest's E-mail"/><br/>
							<label>GUEST 3</label><br/>
							<input required type="text" placeholder="Your Guest's First Name"/>
							<input required type="text" placeholder="Your Guest's Last Name"/>
							<input required type="text" placeholder="Your Guest's E-mail"/>
						</div>
					)}
				</div>
				)}
			</div>
			<h3 id="price">Your Total: ${this.state.price}</h3>
			<input id="booktripbutton" type="submit" value="BOOK TRIP"/>
        </form>
	</div>
	)};
}

export default withRouter(BookingInfo);