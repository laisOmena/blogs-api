const express = require('express');

const categoryController = require('../controllers/categoryController');

const { validateToken } = require('../middlewares/validateToken');
const { validateCategoryName } = require('../middlewares/validateCategory');

const router = express.Router();

router.post('/', validateToken, validateCategoryName, categoryController.postCategory);

module.exports = router;