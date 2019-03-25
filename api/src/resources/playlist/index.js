const controller = require('./playlist.controller');
const router = require('koa-router')();

router.get('/', controller.getPlaylists);
router.post('/add', controller.addPlaylist);

module.exports = router.routes();