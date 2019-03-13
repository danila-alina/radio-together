const controller = require('./test.controller');
const router = require('koa-router')();

router.get('/', controller.test);

module.exports = router.routes();