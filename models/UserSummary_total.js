const mongoose = require('mongoose');
const conns = require('../utils/MongoUtil')
const total_Schema = new mongoose.Schema({
    _id: { type: String },
    uid: { type: Number },
    total_gold: { type: Number },
    box_gold: { type: Number },
    flow: { type: Number },
    give: { type: Number },
    receive: { type: Number },
    recharge: { type: Number },
    reward: { type: Number },
    tax: { type: Number },
    trade_tax: { type: Number },
    roundNum: { type: Number },
    winLose: { type: Number },
    outTime: { type: Number },
    updateTime: { type: Number }
})
total_Schema.set('toJSON', { virtuals: true })
let UserSummary_total = conns.statistic_conn.model('UserSummary_total', total_Schema,"userSummary_total")
module.exports = UserSummary_total