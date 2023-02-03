const { User } = require('../models');

const getLogin = async (email, password) => {
  const user = await User.findOne({ where: { email, password } });
  return user;
};

const postUser = async (displayName, email, password, image) => {
  const newUser = await User.create({ displayName, email, password, image });
  return newUser;
};

module.exports = { getLogin, postUser };