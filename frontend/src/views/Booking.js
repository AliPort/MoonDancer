import React from 'react';
import { ProfileComponent } from './Profile';
import { TextField } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';




class Booking extends React.Component {
	state = {
	  value: null,
	};

	render() {
		return (
		  <main>
			<h1>BOOK A TOUR</h1>
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
			<BasicSelect />
		   
		  </main>
		);
	  }
	  
	}
  
	function BasicSelect() {
	  const [time, setTime] = React.useState('');
	
	  const handleChange = (event) => {
		setTime(event.target.value);
	  };
	
	  return (
		<Box sx={{ minWidth: 120 }}>
		  <FormControl fullWidth>
			<InputLabel id="TourTime">Time of Day</InputLabel>
			<Select
			  labelId="TourTime"
			  id="TourTime-select"
			  value={time}
			  label="Time"
			  onChange={handleChange}
			>
			  <MenuItem value={10}>Morning</MenuItem>
			  <MenuItem value={20}>Afternoon</MenuItem>
			  <MenuItem value={30}>All Day</MenuItem>
			</Select>
		  </FormControl>
		</Box>
	  );
	}

  export default Booking;
 
  
  
  /*
  import React from 'react';
import { Dayjs } from 'dayjs';
import { TextField } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios';



class Booking extends React.Component {
	state = {
	  value: null,
	};

	
  
	






  export default Booking;






  render() {
		return (
		  <main>
			<h1>BOOK A TOUR</h1>
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
			<BasicSelect
			  value={this.state.tourTimeOfDay}
			  onChange={(newValue) => {
				this.setState({ tourTimeOfDay: newValue });
			  }}
			/>
			<form onSubmit={this.handleSubmit}>
			  <label>
				Tour Time:
				<input
				  type="time"
				  name="tour-time"
				  value={this.state.tourTime}
				  onChange={this.handleChange}
				/>
			  </label>
			  <br />
			  <button type="submit">Book Tour</button>
			</form>
		  </main>
		);
	  }
	  
	  handleSubmit(event) {
		event.preventDefault();
	  
		// Create an object with the tour date, time, and time of day
		const tourData = {
		  tourDate: this.state.value,
		  tourTime: this.state.tourTime,
		  tourTimeOfDay: this.state.tourTimeOfDay
		};
	  
		// Send the tour data to your backend API for storage
		axios
		  .post("../backend/models/tour", tourData)
		  .then((response) => {
			// Handle the response from the API, such as displaying a confirmation message or redirecting the user to a new page
		  })
		  .catch((error) => {
			// Handle any errors that occur during the request
		  });
	  }
  */
  