
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

  profile_name: {
    type: String,
    default: this.username
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: String,
  password: {
    type: String,
    required: true
  },
  img: {
    type: String
  },
  rate: Number,
  _following: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  _followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  _recommendations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Recommendation' }]

});

module.exports = mongoose.model('User', userSchema);