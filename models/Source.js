const mongoose = require('mongoose');
const conns = require('../utils/MongoUtil')
const sourceSchema = new mongoose.Schema({
  _id:{type:String},
  room_id:{type:Number},
  game_id:{type:Number},
  diff:{type:Number},
  type:{type:Number},
  uid:{ type: Number },
  pre_totalGold:{type: Number},
  post_totalGold:{type: Number},
  type:{type: Number},
  diff:{type:Number}, 
  pump:{type:Number}, 
  round:{type:Number}, 
  remark:{type:String}, 
  timestamp:{type:Number}
})
//const sourceSchema = new mongoose.Schema({});
sourceSchema.set('toJSON', { virtuals: true })
let source = conns.statistic_conn.model('source',sourceSchema,"sources")
module.exports = source
