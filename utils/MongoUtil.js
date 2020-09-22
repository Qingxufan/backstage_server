const mongoose = require('mongoose');
const config = require('../config/config')
//默认后台连接
const default_url = config.mongodb.url
//数据中心连接
const statistic_url = config.statisticmongodb.url 
//主库连接
const arcade_center_test_url = config.arcade_center_test.url 

var default_conn = mongoose.createConnection(default_url,{ useNewUrlParser: true,useUnifiedTopology: true})
var statistic_conn = mongoose.createConnection(statistic_url,{ useNewUrlParser: true,useUnifiedTopology: true})
var arcade_center_conn = mongoose.createConnection(arcade_center_test_url,{ useNewUrlParser: true,useUnifiedTopology: true})
module.exports = {default_conn,statistic_conn,arcade_center_conn}