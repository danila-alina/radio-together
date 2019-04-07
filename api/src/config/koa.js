const bodyParser = require('koa-bodyparser');
const cors = require('koa-cors');
const routes = require('./routes');

module.exports = (app) => {
  app.use(cors());
  app.use(bodyParser({ enableTypes: ['json', 'form', 'text'] }));
  routes(app);
};
