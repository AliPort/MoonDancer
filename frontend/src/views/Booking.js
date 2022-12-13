import React from 'react';
import { Dayjs } from 'dayjs';
import { TextField } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Tours from "../components/Tours"

class Booking extends React.Component {
	state = {
	value: null,
	};
	render() {
	return (
	<main>
		<h1>BOOK YOU TOUR</h1>
		{/* THIS DOESNT WORK YET SORRY GUYS */}
		<script>
		</script>
		<button class="collapsible">
			1/2 Day - Morning
			<h2>PLACEHOLDER FOR AN IMAGE</h2>
		</button>
		<div class="content">
  			<p>INFORMATION ABOUT THE TOUR</p>
		</div>
		<button class="collapsible">
			1/2 Day - Afternoon
			<h2>PLACEHOLDER FOR AN IMAGE</h2>
		</button>
		<div class="content">
  			<p>INFORMATION ABOUT THE TOUR</p>
		</div>
		<button class="collapsible">
			Full
			<h2>PLACEHOLDER FOR AN IMAGE</h2>
		</button>
		<div class="content">
  			<p>INFORMATION ABOUT THE TOUR</p>
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