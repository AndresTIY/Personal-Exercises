/* Now we want to wire up the client socket code that'll communicate
with the server side socket to start a timer, by emitting
`subscribeToTimer` and consume `timer` events emitted by the server
*/

// function subscribeToTimer(interval, cb) {
// }

// export { subscribeToTimer }

/*Basically using a node style function where the caller of this fn
can pass in an interval for the timer of the first param and a
callback fn on the second param. Need to install the socket.io
library with `npm i --save socket.io-client`*/


import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');

function subscribeToTimer(cb) {
  socket.on('timer', timestamp => cb(null, timestamp));
  socket.emit('subscribeToTimer', 1000);
}

export { subscribeToTimer }

/*We subscribe to the `timer` event on the socket before we emit the
`subscribeToTimer` event. We did this in case we run into a race
condition where timer events are being emitted from the server, but
the client hasn't shown it's interest in it yet, causing events to
go missing*/
