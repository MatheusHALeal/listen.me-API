const mongoose = require('mongoose');

const musicSchema = new mongoose.Schema({
    name: String,
    artist: String
  });

module.exports = mongoose.model('Music', musicSchema);