const express = require('express');
const router = express.Router();



const { queryToFetchAllTours } = require("../queries/index.js")
const fetchAllTours = async  () => {
    try {
      const products = await queryToFetchAllTours()
      console.log('DEM TOURS ====>', products)
    } catch (error) {
  console.error(error)
  }}
// Define a GET endpoint to retrieve a list of tours
router.get('/', (req, res) => {
  // Get the list of tours from your database or other source
  const tours = fetchAllTours();

  // Send the list of tours as a response
  res.send(tours);
});

// Define a POST endpoint to create a new tour
router.post('/', (req, res) => {
  // Get the tour data from the request body
  const { tourName, timeOfDay, tourDate } = req.body;

  // Save the tour data to the database
  saveTour(tourName, timeOfDay, tourDate);

  // Send a response to the frontend
  res.send({ status: 'success' });
});

module.exports = router;