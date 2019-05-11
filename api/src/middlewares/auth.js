const jwt = require('jsonwebtoken');
const config = require('config/config');

const authMiddleware = () => async (ctx, next) => {
  const authHeader = ctx.headers.authorization || '';
  const token = authHeader.replace('Bearer ', '');

  try {
    const decoded = jwt.verify(token, config.jwtSecret);
    ctx.state.userId = decoded.id;
    await next();
  } catch (error) {
    console.error(error);
    ctx.throw(401, 'Unathorized', error);
  }
};

module.exports = authMiddleware;
