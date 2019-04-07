const router = require('koa-router')();
const controller = require('./user.controller');

router.get('/', controller.getUserInfo);
router.get('/sign-in', controller.signIn);
router.get('/radiostation', controller.getRadiostation);
router.post('/set-radiostation', controller.setPlaylistToRadiostation);
router.post('/unset-radiostation', controller.unsetRadiostation);

module.exports = router.routes();
