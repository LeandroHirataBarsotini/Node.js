var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send('Hello World');
})

var server = app.listen(8081, function () {
   var host = server.address().address;
   var port = server.address().port;
   var family = server.address().family;
   
   //console.log("Example app listening at http://%s:%s e familia:%s", host, port, family)
   require('dns').lookup(require('os').hostname(), function (err, add, fam) {
        console.log('Example app listening at http://%s:%s', add, port);
    })
    
})