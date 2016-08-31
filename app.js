var express = require('express');

var app = express();

var port = process.env.PORT || 7000;

app.get('/', function (request,response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World\n");
})


var server = app.listen(port, function () {

})