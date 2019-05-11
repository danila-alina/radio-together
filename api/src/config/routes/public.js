const mount = require('koa-mount');
const serve = require('koa-static');
const config = require('config/config');

const userResource = require('resources/user');

module.exports = (app) => {
  app.use(mount('/api/user', userResource.public));
  app.use(mount('/image', serve(config.pathToServe)));
};
