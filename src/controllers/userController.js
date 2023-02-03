require('dotenv').config();

const jwt = require('jsonwebtoken');
const userService = require('../services/userService');

const generateToken = (data) => {
  const { JWT_SECRET } = process.env;
  const jwtHeader = {
    expiresIn: '24h',
    algorithm: 'HS256',
  }; 
  const { email } = data;

  const token = jwt.sign({ data: { email } }, JWT_SECRET, jwtHeader);
  return token;
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await userService.getLogin(email, password);
  
  if (!user) {
    return res.status(400).send({
      message: 'Invalid fields',
    });
  }
  
  const token = generateToken(user);
  res.status(200).send({ token });
};

const registerUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const existing = await userService.getLogin(email, password);
  if (existing) {
    return res.status(409).send({
      message: 'User already registered',
    });
  }

  const user = await userService.postUser(displayName, email, password, image);

  const token = generateToken(user);
  res.status(201).send({ token });
};

const getAllUsers = async (req, res) => {
  const users = await userService.getAllUsers();
  res.status(200).json(users);
};

const getById = async (req, res) => {
  const { id } = req.params;

  const userId = await userService.getById(id);
  if (!userId) {
    return res.status(404).send({
      message: 'User does not exist',
    });
  }

  res.status(200).json(userId);
};

module.exports = { login, registerUser, getAllUsers, getById };