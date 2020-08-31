const mongoose = require('mongoose');
const conns = require('../utils/MongoUtil')
const gameSchema = new mongoose.Schema({
    _id: { type: String },
    game_id: { type: Number, required: true },
    type: { type: Number },
    name: { type: String },
    status: { type: Number },
    icon: { type: Number },
    game_key: { type: String },
    lobby_server: { type: Object },
    currency_type:{type:Number}
})
gameSchema.set('toJSON', { virtuals: true })
let game = conns.arcade_center_conn.model('game', gameSchema, "game_info")
module.exports = game