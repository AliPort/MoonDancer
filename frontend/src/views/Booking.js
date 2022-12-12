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
		</main>
	  );
	}
  }
  
  export default Booking;
 
  
  
  
  
  