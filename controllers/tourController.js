const fs = require('fs');

// Read data from tours simple
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);

// Checks id from middleware
exports.checkID = (req, res, next, val) => {
  console.log(`Tour ID: ${val}`);
  if (val * 1 > tours.length) {
    return res.status(404).json({
      status: 'fail',
      error: 'Not found, invalid id',
    });
  }
  next();
};

// GET All Tours Route
exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: {
      tours: tours,
    },
    requestedAt: req.requestTime,
  });
};

exports.getTourById = (req, res) => {
  const tourId = req.params.id * 1;
  const tour = tours.find((el) => el.id === tourId);

  if (!tour) {
    return res.status(404).json({
      status: 'fail',
      error: 'Not found',
    });
  }

  res.status(200).json({
    status: 'success',
    data: {
      tour: tour,
    },
  });
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
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);

  tours.push(newTour);
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: {
          tour: newTour,
        },
      });
    }
  );
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
