const router = require('koa-router')();
const controller = require('./track.controller');

router.get('/popular', controller.getPopularTracks);

module.exports = router.routes();
