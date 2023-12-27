// Models
const Tour = require('../models/tourModel');

// GET All Tours Route
exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    // results: tours.length,
    // data: {
    //   tours: tours,
    // },
    requestedAt: req.requestTime,
  });
};

exports.getTourById = (req, res) => {
  // const tourId = req.params.id * 1;
  // const tour = tours.find((el) => el.id === tourId);
  // if (!tour) {
  //   return res.status(404).json({
  //     status: 'fail',
  //     error: 'Not found',
  //   });
  // }
  // res.status(200).json({
  //   status: 'success',
  //   data: {
  //     tour: tour,
  //   },
  // });
};

exports.createTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        tour: newTour,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: 'Invalid data sent', // dont do this in prod
    });
  }
};

exports.updateTour = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tour: 'Updated',
    },
  });
};

exports.deleteTour = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: null,
  });
};
