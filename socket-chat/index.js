var app = require('express')();
var http = require('http').Server(app);

// Express initializes `app` to be a fn handler
// that you can supply to an HTTP server

/* app.get('/', function(req, res){
  res.send('<h1>Hello World</h1>');
}); */

// We define a route handler `/` that gets
// called when we hit our website home

http.listen(3000, function(){
  console.log('listening on *:3000');
});
// We make the http server listen on port 3000

/*------------------------------------*/

// So far we're calling `res.send` and pass it a
// HTML string. Our code would look confusing if we
// placed our entire HTML there, so
// we need to create index.html and serve it

// Refactor route handler to use `sendFile` instead

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

/* Socket.IO is composed of two parts:
-a server that integrates w/or mounts on the node.js http server: socket.io
-a client lib that loads on the browser side: socket.io-client

during dev, socket.io servers the client automatically for us
as we'll see, for now we only have to install one module
"npm install --save socket.io" */

var io = require('socket.io')(http);
/* initialize a new instance of socket.io by passing the http server
object then listen on connection event for incoming sockets and
log it to the console */

// io.on('connection', function(socket){
//   console.log('a user connected');
//   socket.on('disconnect', function(){
//     console.log('user disconnected');
//   });
// });

// io.on('connection', function(socket){
//   socket.on('chat message', function(msg){
//     console.log('message: ' + msg);
//   });
// });


/*---------------Broadcasting----------------*/

// io.emit('some event', { for: 'everyone' });

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});
