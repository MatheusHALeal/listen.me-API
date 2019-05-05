
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
    data: Buffer,
    contentType: String
  },
  rate: Number,
  user: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]

});

module.exports = mongoose.model('User', userSchema);