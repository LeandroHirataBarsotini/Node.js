var express = require('express');
var app = express();
var fs = require("fs");

var bodyParser = require('body-parser');
var multer  = require('multer');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: 'C:\\Temp\\'}).any());

app.get('/upload.html', function (req, res) {
   res.sendFile( __dirname + "/" + "upload.html" );
})

app.post('/file_upload', function (req, res) {
   //console.log(req.files.file.name);
   console.log(req.files[0].originalname);
   console.log(req.files[0].path);
   //console.log(req.files.file.type);
   var file = __dirname + "/" + req.files[0].originalname;
   
   fs.readFile( req.files[0].path, function (err, data) {
      fs.writeFile(file, data, function (err) {
         if( err ){
            console.log( err );
            }else{
               response = {
                  message:'File uploaded successfully',
                  filename:req.files[0].originalname
               };
            }
         console.log( response );
         res.end( JSON.stringify( response ) );
      });
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