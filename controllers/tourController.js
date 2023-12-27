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

exports.checkBody = (req, res, next) => {
  // check if body contains name and price property
  if (req.body.name && req.body.price) {
    console.log(`Request:\nName: ${req.body.name}\nPrice: ${req.body.price}`);
    next();
  } else {
    return res.status(400).json({
      status: 'error',
      message: `Bad Request:\nName Missing?: ${req.body.name}\nPrice Missing?: ${req.body.price} `,
    });
  }
};

exports.createTour = (req, res) => {
  res.status(201).json({
    status: 'success',
    data: {
      data: null,
    },
  });
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
