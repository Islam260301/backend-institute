const mongoose = require('mongoose');const Schema = mongoose.Schema;const positionSchema = new Schema({    position: {        type: Object,        required: true,    },})const Position = mongoose.model('Position', positionSchema);module.exports = Position;