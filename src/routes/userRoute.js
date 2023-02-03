const express = require('express');

const userController = require('../controllers/userController');
const { 
  validateUserDN, 
  validateUserEmail, 
  validateUserPassword,
} = require('../middlewares/validateUser');

const { validateToken } = require('../middlewares/validateToken');

const router = express.Router();

router.post(
  '/', 
  validateUserDN,
  validateUserEmail,
  validateUserPassword,
  userController.registerUser,
);

router.get('/', validateToken, userController.getAllUsers);

module.exports = router;