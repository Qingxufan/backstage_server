const StatisticService = require('../service/StatisticService')
const ResUtil = require('../utils/ResUtil');

async function list_goldchange(ctx) {
    let uid = ctx.request.body.uid;
    // let time_start = ctx.request.body.time_start;
    // let time_end = ctx.request.body.time_end;
    let time_range =  ctx.request.body.time_range
    let changeType = ctx.request.body.changeType
    let page = ctx.request.body.page
    if (!uid) {
        return ResUtil.resErr.param_lose;
    }
    if(!page){
        page = {
            'current_page':1,
            'page_size':10
        }
    }
    return await StatisticService.getGoldChangeList(uid,time_range,changeType,page);
}

async function list_goldChangeNoGame(ctx) {
    let uid = ctx.request.body.uid;
    let diff_range =  ctx.request.body.diff_range
    let changeType = ctx.request.body.changeType
    let page = ctx.request.body.page
    if (!uid||!changeType) {
        return ResUtil.resErr.param_lose;
    }
    if(!page){
        page = {
            'current_page':1,
            'page_size':10
        }
    }
    return await StatisticService.getGoldChangeNoGameList(uid,diff_range,changeType,page);
}

async function list_giveAndReceive(ctx) {
    let uid = ctx.request.body.uid;
    let diff_range =  ctx.request.body.diff_range
    let page = ctx.request.body.page
    if (!uid) {
        return ResUtil.resErr.param_lose;
    }
    if(!page){
        page = {
            'current_page':1,
            'page_size':10
        }
    }
    return await StatisticService.giveAndReceiveList(uid,diff_range,page);
}

async function list_playerAccount(ctx) {
    let uid = ctx.request.body.uid;
    let diff_range =  ctx.request.body.diff_range
    let search_item =  ctx.request.body.search_item
    let page = ctx.request.body.page
    if(!page){
        page = {
            'current_page':1,
            'page_size':10
        }
    }
    return await StatisticService.getPlayerAccountList(uid,diff_range,search_item,page);
}

async function list_realTimeData(ctx) {
    let search = ctx.request.body.search;
    let page = ctx.request.body.page
    if(!search.value){
        return ResUtil.resErr.param_lose;
    }
    if(!page){
        page = {
            'current_page':1,
            'page_size':10
        }
    }
    return await StatisticService.getRealTimeData(search,page);
}

async function list_gameRecord(ctx) {
    let search = ctx.request.body.search;
    let page = ctx.request.body.page
    if(!page){
        page = {
            'current_page':1,
            'page_size':10
        }
    }
    return await StatisticService.getGameRecord(search,page);
}

module.exports = { list_goldchange,list_goldChangeNoGame,list_giveAndReceive,list_playerAccount,list_realTimeData,list_gameRecord}