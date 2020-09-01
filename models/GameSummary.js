const mongoose = require('mongoose');
const conns = require('../utils/MongoUtil')
const gamesummary_Schema = new mongoose.Schema({
    _id: { type: String },
    flow: { type: Number },
    flow_diff: { type: Number },
    game_id: { type: Number },
    room_id: { type: Number },
    roundNum: { type: Number },
    roundNum_diff: { type: Number },
    tax: { type: Number },
    tax_diff: { type: Number },
    todayTime: { type: Number },
    winLose: { type: Number },
    winLose_diff: { type: Number },
})
gamesummary_Schema.set('toJSON', { virtuals: true })
let GameSummary = conns.statistic_conn.model('GameSummary', gamesummary_Schema, "gameSummary")
module.exports = GameSummary