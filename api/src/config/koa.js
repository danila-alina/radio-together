const bodyParser = require('koa-bodyparser');
const cors = require('koa-cors');
const authMiddleware = require('middlewares/auth');
const errorMiddleware = require('middlewares/error');

const publicRoutes = require('./routes/public');
const privateRoutes = require('./routes/private');

module.exports = (app) => {
  app.use(cors());
  app.use(bodyParser({ enableTypes: ['json', 'form', 'text'] }));
  app.use(errorMiddleware());
  publicRoutes(app);
  app.use(authMiddleware());
  privateRoutes(app);
};
