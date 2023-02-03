const validateUserDN = (req, res, next) => {
  const { displayName } = req.body;

  if (displayName.length < 8) {
    return res.status(400).send({
      message: '"displayName" length must be at least 8 characters long',
    });
  }

  next();
};

const validateUserEmail = (req, res, next) => {
  const { email } = req.body;
  const regex = /\S+@\S+\.\S+/;
  const verify = regex.test(email);

  if (!verify) {
    return res.status(400).send({
      message: '"email" must be a valid email',
    });
  }

  next();
};

const validateUserPassword = (req, res, next) => {
  const { password } = req.body;

  if (password.length < 6) {
    return res.status(400).send({
      message: '"password" length must be at least 6 characters long',
    });
  }

  next();
};

module.exports = { validateUserDN, validateUserEmail, validateUserPassword };