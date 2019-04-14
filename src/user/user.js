
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    login: String,
    password: String,
    user: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]    

  });

module.exports = mongoose.model('User', userSchema);