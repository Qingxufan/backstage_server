const mongoose = require('mongoose');
const config = require('../config/config')
const db = config.mongodb.url
mongoose.connect(db)
module.exports = mongoose.connect(db)