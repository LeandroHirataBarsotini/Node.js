var express = require('express');
var app = express();
var fs = require("fs");

app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "public/users.json", 'utf8', function (err, data) {
   		 console.log(__dirname);
       console.log( data );
       res.end( data );
   });
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