const express = require('express')
const ip = require('ip')

const port = process.env.PORT || 3000

var app = express()

app.get('/', (req, res) => {
  var ipaddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  var language = req.headers['accept-language'];
  var software = req.headers['user-agent'];
  var result = JSON.stringify({
      ipaddress, language, software
  }, undefined, 4);
  
  res.send(result);
})

app.listen(port, () => {
    console.log(`Started on port ${port}`)
})
