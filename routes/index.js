const router = require('koa-router')()
const user = require('./user')
const statistic = require('./statistic')

router.use('/user',user.routes())
router.use('/statistic',statistic.routes())

module.exports = router
