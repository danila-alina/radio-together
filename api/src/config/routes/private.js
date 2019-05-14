const mount = require('koa-mount');

const userResource = require('resources/user');
const playlistResource = require('resources/playlist');
const trackResource = require('resources/track');

module.exports = (app) => {
  app.use(mount('/api/user', userResource.private));
  app.use(mount('/api/playlist', playlistResource));
  app.use(mount('/api/track', trackResource));
};
