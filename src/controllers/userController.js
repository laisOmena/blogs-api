require('dotenv').config();

const userService = require('../services/userService');

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await userService.getLogin(email, password);

  if (!user) {
    return res.status(400).send({
      message: 'Invalid fields',
    });
  }

  res.status(200).send({ token: user });
};

module.exports = { login };