var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('hello world');
});
var port = 1337;
app.listen(port);
console.log("Server running on port: "+port);