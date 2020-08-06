const UserService = require('../service/UserService')
const ResUtil = require('../utils/ResUtil');
const json = require('koa-json');

async function list(ctx) {
    let username = ctx.request.body.username;
    let permission = ctx.session.userinfo.permission || 100;
    return await UserService.list(username, permission);
}
async function update(ctx) {
    let permission = ctx.request.body.permission || 100;
    if (permission <= ctx.session.userinfo.permission) {
        return ResUtil.resErr.promission_limit;
    }
    let username = ctx.request.body.username;
    if (!username) {
        return ResUtil.resErr.param_lose;
    }

    var commotJson = {};
    commotJson.username = username;

    if (ctx.request.body.status != null) {
        commotJson.status = ctx.request.body.status;
    }
    if (permission != 100) {
        commotJson.permission = permission;
    }
    if (ctx.request.body.password) {
        commotJson.password = ctx.request.body.password;
    }
    return await UserService.update(commotJson);
}
async function register(ctx) {
    let username = ctx.request.body.username;
    let password = ctx.request.body.password;
    let permission = ctx.request.body.permission;
    if (permission != null && permission <= ctx.session.userinfo.permission) {
        return ResUtil.resErr.promission_limit;
    }
    if (!username || !password) {
        return ResUtil.resErr.param_lose;
    }
    let commotJson = {};
    commotJson.username = username;
    commotJson.password = password;
    if(permission!=null){
        commotJson.permission = permission;
    }
    if (ctx.request.body.status != null) {
        commotJson.status = ctx.request.body.status;
    }
    commotJson.username = username;
    return await UserService.add(commotJson);
}
async function login(ctx) {
    let username = ctx.request.body.username;
    let password = ctx.request.body.password;
    if (!username || !password) {
        return ResUtil.resErr.param_lose;
    }
    return await UserService.login(ctx);
}
async function loginout(ctx) {
    ctx.session.userinfo = null
    ctx.cookies.set('koa.sess', '', { maxAge: 1000 })
    return ResUtil.success;
}

module.exports = { list, update, register, login, loginout }