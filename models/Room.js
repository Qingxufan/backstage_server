const mongoose = require('mongoose');
const conns = require('../utils/MongoUtil')
const roomSchema = new mongoose.Schema({
    _id: { type: String },
    game_id: { type: Number },
    room_id: { type: Number },
    roomName: { type: String },
    roomIcon: { type: Number },
    status: { type: Number },
    sort: { type: Number },
    lobby_server: { type: Object },
})
roomSchema.set('toJSON', { virtuals: true })
let game = conns.statistic_conn.model('room', roomSchema, "room")
module.exports = game