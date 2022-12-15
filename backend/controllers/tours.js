const router = require('express').Router()
const db = require("../models/tour")

const { Tour } = db

class TourController {
    createTour(req, res) {
      // Create a new instance of the Tour model with the date from the request body
      const tour = Tour.build({ date: req.body.date });
  
      // Save the tour to the database
      tour.save()
        .then(() => res.sendStatus(200))
        .catch(error => res.status(400).send(error));
    }
  }
  
  // Create a new instance of the TourController
  const controller = new TourController();
  
  // Create a new Tour model instance
  router.post('/', (req, res) => {
    controller.createTour(req, res);
  });
  
  module.exports = router;