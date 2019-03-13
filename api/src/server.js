const koa = require('koa');

const app = new koa();
require('./config/koa')(app);

app.listen(3001);
console.log('Koa listening on port 3001');