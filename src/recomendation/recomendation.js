
const mongoose = require('mongoose');

const recomendationSchema = new mongoose.Schema({
    rating: String,
    comment: String,
    idSource: Number,
    idTarget: Number,
    type: String,
    music: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Music' }]    

  });

module.exports = mongoose.model('Recomendation', recomendationSchema);