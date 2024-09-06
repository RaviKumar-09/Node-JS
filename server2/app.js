var http = require('http');


http.createServer(function(req, res){
    res.write("Hello My dear friends welcome to here the my server");
    res.end()

}).listen(8080)