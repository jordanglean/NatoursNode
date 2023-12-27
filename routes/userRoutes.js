const express = require("express");
// Controllers
const userController = require('../controllers/userController');

// Routers
const router = express.Router();



// User Routes 
router.route('/').get(userController.getAllUsers).post(userController.createUser);

router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
