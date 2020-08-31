const mongoose = require('mongoose');
const conns = require('../utils/MongoUtil')
const day_Schema = new mongoose.Schema({
    _id: { type: String },
    uid: { type: Number },
    totalgold_diff: { type: Number },
    boxgold_diff: { type: Number },
    flow_diff: { type: Number },
    give_diff: { type: Number },
    receive_diff: { type: Number },
    recharge_diff: { type: Number },
    reward_diff: { type: Number },
    tax_diff: { type: Number },
    tradetax_diff: { type: Number },
    roundNum_diff: { type: Number },
    winLose_diff: { type: Number },
    uc:{type:Object},
    outTime: { type: Number }
})
day_Schema.set('toJSON', { virtuals: true })
let UserSummary_day = conns.statistic_conn.model('UserSummary_day', day_Schema,"userSummary_day")
module.exports = UserSummary_day