const { BlogPost } = require('../models');

const getAllPost = async () => {
  const posts = await BlogPost.findAll();
  console.log(posts);
  if (!posts) {
    return null;
  }
  return posts;
};

module.exports = { getAllPost };
