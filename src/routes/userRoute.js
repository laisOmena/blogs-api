const express = require('express');

const userController = require('../controllers/userController');
const { 
  validateUserDN, 
  validateUserEmail, 
  validateUserPassword,
} = require('../middlewares/validateUser');

const router = express.Router();

router.post(
  '/', 
  validateUserDN,
  validateUserEmail,
  validateUserPassword,
  userController.registerUser,
);

module.exports = router;