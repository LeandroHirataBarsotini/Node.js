var http = require('http');
http.createServer(function(req,res) {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' }); 
  res.end('<h2>Ola mundo!</h2>');
}).listen(3000);
console.log('Servidor iniciado em localhost:3000. Ctrl+C para encerrar…');