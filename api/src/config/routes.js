const mount = require('koa-mount');
const serve = require('koa-static');
const config = require('config/config');

const testResource = require('resources/test');
const userResource = require('resources/user');
const playlistResource = require('resources/playlist');

module.exports = (app) => {
  app.use(mount('/api/test', testResource));
  app.use(mount('/api/user', userResource));
  app.use(mount('/api/playlist', playlistResource));
  app.use(mount('/image', serve(config.pathToServe)));
};
