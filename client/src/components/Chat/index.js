import React, { Component } from 'react';
import AlertContainer from 'react-alert';

import Message from './Message.jsx'
import Messages from './Messages.jsx'
import ChatInput from './ChatInput.jsx'
import Rooms from '../Rooms';

import socket from '../../utils/socket';

class Chat extends Component {

  constructor(props) {
    super(props);

    this.sendMessage = this.sendMessage.bind(this);
  }

  errorHandler(error) {
    msg.error(error);
  }

  sendMessage(text) {
    socket.emit('message', text);
  }

  componentDidMount() {
    this.props.roomsActions.fetchRoomsRequest();
  }

  render() {
    const { messages } = this.props.chatroom;
    const { error } = this.props.rooms;
    const user = this.props.user;

    if(error) this.errorHandler(error);

    return (
      <div className="chat wrapper">
        <Rooms />
        <Messages messages={messages} user={user} />

        <ChatInput addMessage={this.sendMessage}/>
        <AlertContainer ref={(a) => global.msg = a} {...this.alertOptions} />
      </div>
    );
  }

}

export default Chat;
