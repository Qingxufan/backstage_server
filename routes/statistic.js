const router = require('koa-router')()
const StatisticController = require('../controller/StatisticController')


router.post('/list_goldchange', async ctx => {
    ctx.response.body = await StatisticController.list_goldchange(ctx);
})

router.post('/list_goldChangeNoGame', async ctx => {
    ctx.response.body = await StatisticController.list_goldChangeNoGame(ctx);
})

router.post('/list_giveAndReceive', async ctx => {
    ctx.response.body = await StatisticController.list_giveAndReceive(ctx);
})

router.post('/list_playerAccount', async ctx => {
    ctx.response.body = await StatisticController.list_playerAccount(ctx);
})

router.post('/list_realTimeData', async ctx => {
    ctx.response.body = await StatisticController.list_realTimeData(ctx);
})

router.post('/list_gameRecord', async ctx => {
    ctx.response.body = await StatisticController.list_gameRecord(ctx);
})

router.post('/list_dataSummary', async ctx => {
    ctx.response.body = await StatisticController.list_dataSummary(ctx);
})

router.post('/getRoundDetail', async ctx => {
    ctx.response.body = await StatisticController.getRoundDetail(ctx);
})

router.post('/getFisrtPageData', async ctx => {
    ctx.response.body = await StatisticController.getFisrtPageData(ctx);
})

module.exports = router