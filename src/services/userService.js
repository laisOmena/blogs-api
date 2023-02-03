const { User } = require('../models');

const getLogin = async (email, password) => {
  const user = await User.findOne({ where: { email, password } });
  return user;
};

const postUser = async (displayName, email, password, image) => {
  const newUser = await User.create({ displayName, email, password, image });
  return newUser;
};

const getByUserEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user;
};

const getAllUsers = async () => {
  const users = await User.findAll();
  console.log('>>>>>>>', users);
  const allUsers = users
    .map(({ dataValues: { id, displayName, email, image } }) => ({ 
      id, displayName, email, image }));
  console.log(allUsers);
  return allUsers;
};

module.exports = { getLogin, postUser, getByUserEmail, getAllUsers };