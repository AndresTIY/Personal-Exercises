import React from 'react';
import {View, Text, AsyncStorage } from 'react-native'
import SocketIOClient from 'socket.io-client';

class Main extends React.Component {
  constructor(props) {
    super(props);

    // Creating the socket-client instance will automatically connect to the server.
    this.socket = SocketIOClient('http://localhost:3000');
  }


  // A) Messages to be sent
  socket.on('message', (message) => {
    var oldMessages = this.state.messages;
    // React will automatically rerender the component when a new message is added.
    this.setState({ messages: oldMessages.concat(message) });
  });

  // B) get unique user info
  determineUser() {
    AsyncStorage.getItem('userId')
    .then((userId) => {
      if (userId) {
        this.socket.emit('i-dont-need-an-id');
      } else {
        this.socket.emit('i-need-id');
        this.socket.on('here-is-your-id', (id) => {
          AsyncStorage.setItem('userId', id);
          // Force a rerender in the React component
          this.setState({ id });
        });
      }
    });
  }

}







//message model may look like:
// {
//   text: String,
//   createdAt: Date,
//   userId: ObjectId,
//   chatId: ObjectId
// }

module.exports = Main;
