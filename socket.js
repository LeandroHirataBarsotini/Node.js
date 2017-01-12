var app = require('http').createServer();
var io = require('socket.io')(app);

app.listen(8080);

io.on('connection', function (socket) {
  
  // Send a message to the client
  socket.emit('event to client', { hello: 'world' });

  // Handle a message from the client
  socket.on('event from client', function (data) {
    console.log(data);
  });
});