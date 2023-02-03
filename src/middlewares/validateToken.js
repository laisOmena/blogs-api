// src/auth/validateJWT.js
const jwt = require('jsonwebtoken');

require('dotenv/config');
const UserService = require('../services/userService');

const { JWT_SECRET } = process.env;

const validateToken = async (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).send({ message: 'Token not found' });
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET);   
    const user = await UserService.getByUserEmail(decoded.data.email);
    if (!user) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = { validateToken };