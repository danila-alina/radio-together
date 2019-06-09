const router = require('koa-router')();
const controller = require('./track.controller');

router.get('/popular', controller.getPopularTracks);
router.post('/:trackId/rate', controller.rateTrack);
router.get('/search/:searchValue', controller.searchTracks);

module.exports = router.routes();
