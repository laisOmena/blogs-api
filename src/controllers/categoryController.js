require('dotenv').config();

const categoryService = require('../services/categoryService');

const postCategory = async (req, res) => {
  const { name } = req.body;
  const category = await categoryService.postCategory(name);

  res.status(201).send(category);
};

const getAllCategory = async (req, res) => {
  const categories = await categoryService.getAllCategory();
  res.status(200).json(categories);
};

module.exports = { postCategory, getAllCategory };
