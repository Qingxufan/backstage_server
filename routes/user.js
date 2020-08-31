const router = require('koa-router')()
const User = require('../models/User')
const UserController = require('../controller/UserController')

//router.prefix('/user')

router.post('/list', async ctx=> {
  ctx.response.body= await UserController.list(ctx)
})

router.post('/update', async ctx=> {
  ctx.response.body= await UserController.update(ctx)
})

router.post('/register', async ctx=> {
  ctx.response.body= await UserController.register(ctx)
})

router.post('/login', async ctx=> {
  ctx.response.body= await UserController.login(ctx)
})

router.post('/loginout', async ctx=> {
  ctx.response.body= await UserController.loginout(ctx)
})


module.exports = router
