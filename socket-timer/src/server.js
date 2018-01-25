const io = require('socket.io')();
const port = 8000;


io.on('connection', (client) => {
  //this is where we start emitting/publishing events to the client
})

io.listen(port);

console.log('listening on port', port);
