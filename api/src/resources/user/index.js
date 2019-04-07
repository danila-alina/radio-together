const controller = require('./user.controller');
const router = require('koa-router')();

router.get('/sign-in', controller.signIn);
router.post('/set-radiostation', controller.setPlaylistToRadiostation);
router.post('/unset-radiostation', controller.unsetRadiostation);

module.exports = router.routes();