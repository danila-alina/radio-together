const controller = require('./user.controller');
const router = require('koa-router')();

router.get('/sign-in', controller.signIn);

module.exports = router.routes();