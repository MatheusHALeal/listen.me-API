const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');
const userRoute = require('./src/user/userRoute')
const musicRoute = require('./src/music/musicRoute')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/user', userRoute);
app.use('/music', musicRoute);

app.listen(3000, function () {
  console.log('app listening on port 3000!')
})

module.exports = app;

