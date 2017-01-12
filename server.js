var net = require('net');

var server = net.createServer(function(socket) {
	socket.write('Echo server\r\n');
	socket.pipe(socket);
	
	socket.on('end', function() {
      console.log('client disconnected');
   });
	
});

server.listen(8080, '127.0.0.1', () => { 
	 console.log('server is listening');
});
