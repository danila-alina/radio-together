const router = require('koa-router')();
const controller = require('./track.controller');

router.get('/popular', controller.getPopularTracks);
router.post('/:trackId/rate', controller.rateTrack);

module.exports = router.routes();
