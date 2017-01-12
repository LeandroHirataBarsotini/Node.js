var http = require('http');

http.createServer(function(request, response) {
  if (request.method === 'GET' && request.url === '/lu') {
    request.pipe(response);
  } else {
    response.statusCode = 404;
    response.end();
  }
}).listen(8080);
console.log('Servidor iniciado em localhost:8080. Ctrl+C para encerrar...');