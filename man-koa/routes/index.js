const router = require('koa-router')()
const userRouter = require('./users')
router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})
router.use('/users',userRouter.routes())


module.exports = router
