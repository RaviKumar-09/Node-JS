// Mention the cotent type of the server

var http = require('http');


http.createServer(function(req, res){

    res.writeHead(200, {'Content-Type' : 'text/html'})
    res.end('<h1>Hello world!!</h1>');

    

}).listen(8080)