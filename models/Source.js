const mongoose = require('mongoose');
const conns = require('../utils/MongoUtil')
const sourceSchema = new mongoose.Schema({
  uid:{ type: Number, required: true },
  nickname:{ type: String },
  post_totalGold:{type: String, required: true},
  type:{type: Number,required: true},
  diff:{type:Number,required: true}, 
  pump:{type:Number,required: true}, 
  remark:{type:String,required: true}, 
  timestamp:{type:Number}
})
//const sourceSchema = new mongoose.Schema({});
sourceSchema.set('toJSON', { virtuals: true })
let source = conns.statistic_conn.model('source',sourceSchema)
module.exports = source