const mount = require('koa-mount');
const testResource = require('../resources/test');

module.exports = (app) => {
  app.use(mount('/api/test', testResource));
};