const mongoose = require('mongoose');
const config = require('../config/config')
//默认后台连接
const backstage_url = config[config.mode].mongodb.backstage_url
//数据中心连接
const statistic_url = config[config.mode].mongodb.statistic_url
//主库连接
const arcade_center_url = config[config.mode].mongodb.arcade_center_url

console.log(backstage_url)
console.log(statistic_url)
console.log(arcade_center_url)

var default_conn = mongoose.createConnection(backstage_url, { useNewUrlParser: true, useUnifiedTopology: true })
var statistic_conn = mongoose.createConnection(statistic_url, { useNewUrlParser: true, useUnifiedTopology: true })
var arcade_center_conn = mongoose.createConnection(arcade_center_url, { useNewUrlParser: true, useUnifiedTopology: true })
module.exports = { default_conn, statistic_conn, arcade_center_conn }