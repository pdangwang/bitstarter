var fs=require('fs');

var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {

var buf= fs.readFileSync("index.html", "utf-8");
var contents = contents_buffer.toString();
console.log(contents);

  //response.send("hello workld 3!");

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
