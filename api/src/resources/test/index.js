const router = require('koa-router')();
const controller = require('./test.controller');

router.get('/', controller.test);

module.exports = router.routes();
