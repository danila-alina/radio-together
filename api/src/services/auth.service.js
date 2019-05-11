const jwt = require('jsonwebtoken');
const config = require('config/config');

exports.generateToken = (id) => {
  const token = jwt.sign({ id }, config.jwtSecret);
  return token;
};
