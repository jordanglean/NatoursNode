const express = require('express');
const tourController = require('../controllers/tourController');

const router = express.Router();

// Middleware for checking param
// router.param("id", tourController.checkID);

// Tour Routes
router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.createTour);

// Route based on ID
router
  .route('/:id')
  .get(tourController.getTourById)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
