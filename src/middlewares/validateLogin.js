const Joi = require('joi');

const validateBody = Joi.object({
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
  password: Joi.string().min(6).required(),
});

const validateLogin = (req, res, next) => {
  const login = req.body;

  const { error } = validateBody.validate(login);

  if (error) {
    return res.status(400).send({ message: 'Some required fields are missing' });
  }
  return next();
};

module.exports = { validateLogin };