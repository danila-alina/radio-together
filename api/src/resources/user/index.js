const createRouter = require('koa-router');
const controller = require('./user.controller');

const publicRouter = createRouter();
publicRouter.post('/sign-in', controller.signIn);
publicRouter.post('/sign-up', controller.signUp);

const privateRouter = createRouter();
privateRouter.get('/', controller.getUserInfo);
privateRouter.get('/radiostation', controller.getRadiostation);
privateRouter.post('/set-radiostation', controller.setPlaylistToRadiostation);
privateRouter.post('/unset-radiostation', controller.unsetRadiostation);

module.exports = {
  private: privateRouter.routes(),
  public: publicRouter.routes(),
};
