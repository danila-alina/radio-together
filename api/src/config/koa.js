const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
const logger = require('koa-logger')

const authMiddleware = require('middlewares/auth');

const publicRoutes = require('./routes/public');
const privateRoutes = require('./routes/private');

module.exports = (app) => {
  app.use(cors());
  app.use(bodyParser({ enableTypes: ['json', 'form', 'text'] }));
  app.use(logger());
  publicRoutes(app);
  app.use(authMiddleware());
  privateRoutes(app);
};
