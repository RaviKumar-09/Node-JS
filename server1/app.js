
var http = require('http')


http.createServer(function(req, res){

    res.write("Welocome Back Alein!!")
    res.end()

}).listen(8080)
