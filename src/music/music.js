const mongoose = require('mongoose');

const musicSchema = new mongoose.Schema({
    id: String,
    musicName: String,
    artist: String
  });

module.exports = mongoose.model('Music', musicSchema);