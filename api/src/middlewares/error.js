const errorMiddleware = () => async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    ctx.set('Access-Control-Allow-Origin', '*')
    ctx.status = err.status
  }
};

module.exports = errorMiddleware;
