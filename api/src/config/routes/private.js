const mount = require('koa-mount');

const userResource = require('resources/user');
const playlistResource = require('resources/playlist');

module.exports = (app) => {
  app.use(mount('/api/user', userResource.private));
  app.use(mount('/api/playlist', playlistResource));
};
