const io = require('socket.io')();



/*----------------------------------------------------------------------------*/
// step 1

// io.on('connection', (client) => {
//   //this is where we start emitting/publishing events to the client
// })

/*----------------------------------------------------------------------------*/
//step 2

// io.on('connection', (client) => {
//   client.on('subscribeToTimer', (interval) => {
//     console.log('client is subscribing to timer with interval ', interval);
//   });
// });

// We want the service to start an interval (timer) and emit the current date back to the client
// We want the service to start a timer per client, and the client can pass
// in the desired interval time. That's important because it means that clients can send
// data through to the server socket.

/*----------------------------------------------------------------------------*/
// step 3

io.on('connection', (client) => {
  client.on('subscribeToTimer', (interval) => {
    console.log('client is subscribing to timer with interval ', interval);
    setInterval(() => {
      client.emit('timer', new Date());
    }, interval);
  });
});
// Socket is being fired and started listening on it for clients
// When a client connects, you have a closure where you can handle events from 
// a particular client. You also handle a specific event, `subscribeToTimer`,
// being emitted from the client where you start a timer. When your timer fires,
// you emit an event, `timer`, back to the client


const port = 8000;
io.listen(port);
console.log('listening on port', port);
