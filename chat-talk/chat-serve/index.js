var http = require('http');
var socket = require('socket.io');

var server = http.createServer();
socket = socket.listen(server);

// socket
socket.on('connect', socketListener);


function socketListener(connection) {
  console.log('Has a machine connects');

  connection.on('broadcast', (data) => {
    socket.emit('broadcast', data);
  });

  connection.on('disconnect', (e) => {
    console.log('Has a machine is disconnect');
  });


}

server.listen(8080, (e) => {
  console.log('Server listen on 8080 port');
})