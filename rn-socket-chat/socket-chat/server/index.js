var express = require('express');
var http = require('http')
var socketio = require('socket.io');

var app = express();
var server = http.Server(app);
var websocket = socketio(server);
server.listen(3000, () => console.log('listening on *:3000'));

// The event will be called when a client is connected.
websocket.on('connection', (socket) => {
  console.log('A client just joined on', socket.id);
});


// Server side
// A) Messages to be received
socket.on('message', (message) => {
  // Save the message document in the `messages` collection.
  db.collection('messages').insert(message);

  // The `broadcast` allows us to send to all users but the sender.
  socket.broadcast.emit('message', message);
});

// B) unique user info
socket.on('i-need-id', () => {
  // Create a document in the db and grab that id.
  var user = db.collection('users').insert({});
  socket.emit('here-is-your-id', user._id);
});

socket.on('connection', () => {
  var messages = db.collection('messages').find({
    chatId: chatId // We want all the messages for that room.
  }).sort({
    createdAt: -1 // It's best not to assume that it is in order.
  });
  socket.emit('message', messages);
});
