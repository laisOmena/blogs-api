require('dotenv').config();

const blogPostService = require('../services/blogPostService');

const getAllPost = async (req, res) => {
  const posts = await blogPostService.getAllPost();
  res.status(200).json(posts);
};

module.exports = { getAllPost };