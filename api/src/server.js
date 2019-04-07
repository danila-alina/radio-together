const Koa = require('koa');

const app = new Koa();
require('./config/koa')(app);

app.listen(3001);
console.log('Koa listening on port 3001'); // eslint-disable-line
