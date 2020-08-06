//const mongoose = require('../utils/MongoUtil')
const mongoose = require('mongoose');
const config = require('../config/config')
const db = config.mongodb.url
mongoose.connect(db)
const UserScehma = new mongoose.Schema({
  uid:{ type: Number, required: true },
  username:{ type: String, required: true },
  password:{type: String, required: true},
  status:{type: Number,default:1},
  permission:{type:Number,default:3}, //1 服务器管理院 2.运营商管理院 3.普通用户
  createTime:{tyepe:Date}
})
UserScehma.set('toJSON', { virtuals: true })
let user = mongoose.model('user',UserScehma)
module.exports = user