var http = require('http');

http.createServer(function (req,res){
    res.writeHead(200, {'content-Type' : 'text/plani'});
    res.end('Hello World! Welcome to Node JS');
}).listen(8080);
