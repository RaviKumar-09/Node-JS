var http = require('http');

http.createServer(function (req,res){
    res.writeHead(200, {'content-Type' : 'text/plani'});
    res.end('Hello World!');
}).listen(8080);

