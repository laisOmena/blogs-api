const jwt = require('jsonwebtoken');
const { User } = require('../models');

const { JWT_SECRET } = process.env;

const getLogin = async (email, password) => {
  const user = await User.findOne({ where: { email, password } });

  if (user) {
    const jwtHeader = {
      expiresIn: '24h',
      algorithm: 'HS256',
    }; 
    
    const token = jwt.sign({ data: { email } }, JWT_SECRET, jwtHeader);
    return token;
  }
  return user; 
};

module.exports = { getLogin };