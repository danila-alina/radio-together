const routes = require('./routes');
var cors = require('koa-cors');

module.exports = (app) => {
  app.use(cors());
  routes(app);
};