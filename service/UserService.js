const User = require('../models/User')
const ResUtil = require('../utils/ResUtil')

// let fs = require('fs');

// let options = {
//     flags: 'a',     // append模式
//     encoding: 'utf8',  // utf8编码
// };

// let stdout = fs.createWriteStream('./stdout.log', options);
// let stderr = fs.createWriteStream('./stderr.log', options);

// // 创建logger
// let logger = new console.Console(stdout, stderr);

async function list(username, permission) {
    let find;
    if (username) {
        find = { "username": username, "permission": { $gte: permission } }
    } else {
        find = { "permission": { $gt: permission } }
    }
    let list = await User.find(find, { password: 0, __v: 0 });
    return ResUtil.getSuccess(list);
}

async function update(user) {
    let u = await User.updateOne({ username: user.username }, user);
    if (!u || u.nModified == 0) {
        return ResUtil.error;
    }
    return ResUtil.success
}

async function add(useradd) {
    let u = await User.findOne({ username: useradd.username });
    if (u) {
        return ResUtil.resErr.user_has;
    }
    var maxu = await User.findOne({}, { uid: 1 }).sort({ uid: -1 }).skip(0).limit(1) || [];
    if (maxu.length == 0) {
        maxu = { uid: 0 }
    }
    let uid = maxu.uid;
    useradd.uid = parseInt(uid) + 1;
    let user = new User(useradd);
    let res = await user.save()
    return ResUtil.success
}

async function login(ctx) {
    let username = ctx.request.body.username;
    let password = ctx.request.body.password;
    //logger.log(username + "," + password)
    if (!username || !password) {
        return ResUtil.resErr.param_lose;
    }
    let u = await User.findOne({ username: username, password: password, status: 1 });
    //logger.log(u)
    if (!u) {
        return ResUtil.resErr.password_err;
    }
    ctx.session.userinfo = { uid: u.uid, username: u.username, status: u.status, permission: u.permission }

    return ResUtil.getSuccess({ uid: u.uid, username: u.username, status: u.status, permission: u.permission })
}


module.exports = { list, update, add, login }