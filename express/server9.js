var express = require('express');
var app = express();
var fs = require("fs");

app.get('/:id', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "public/users.json", 'utf8', function (err, data) {
       users = JSON.parse( data );
       console.log(req.params.id);
       var user = users["user" + req.params.id];
       console.log( user );
       res.end( JSON.stringify(user));
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