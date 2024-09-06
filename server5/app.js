/*var fs = require('fs');

fs.readFile('clac.js' , 'utf8',function(err,data){
    console.log(data)

})*/




var fs = require('fs')

fs.writeFile('ravi.js', 'console.log("Done")', function(err){
    console.log("Data Saved")
})

