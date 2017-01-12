var http = require('http');
var url = require('url');

http.createServer(function(req,res) {
	
	var _get = url.parse(req.url, true).query; 
	var valor = null;
	if(_get['data'] == null) {
		valor = 'ta nulo';
	} else {
		valor = _get['data'];
	}
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' }); 
  res.end('Here is your data: ' + valor);
  
  req.on('end', function () { 
  	console.log('cabo a requisicao');
  });
  
}).listen(8080);
console.log('Servidor iniciado em localhost:8080. Ctrl+C para encerrar?');