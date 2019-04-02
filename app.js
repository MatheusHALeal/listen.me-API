
const express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

//Launch listening server on port 8081
app.listen(3000, function () {
  console.log('app listening on port 3000!')
})

