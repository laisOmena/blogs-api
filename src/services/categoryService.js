const { Category } = require('../models');

const postCategory = async (name) => {
  const newCategory = await Category.create({ name });
  return newCategory;
};

const getAllCategory = async () => {
  const categories = await Category.findAll();
  return categories;
};

module.exports = { postCategory, getAllCategory };