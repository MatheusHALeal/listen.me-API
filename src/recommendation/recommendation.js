
const mongoose = require('mongoose');

const recommendationSchema = new mongoose.Schema({
    rating: Number,
    comment: String,
    idSource: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    idTarget: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    type:  String,
    embedUrl: String,
    title: String,
    date: Date,
   // music: { type: mongoose.Schema.Types.ObjectId, ref: 'Music' }

  });

module.exports = mongoose.model('Recommendation', recommendationSchema);
