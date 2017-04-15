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

    socket.connect(this.props.user);

    this.sendMessage = this.sendMessage.bind(this);
  }

  componentDidMount() {
    const ChatroomId = this.props.chatroom.id;
    this.props.chatroomActions.joinChatroom(this.props.user);
    socket.emit('join chatroom', {id: ChatroomId});
  }

  errorHandler(error) {
    msg.error(error);
  }

  sendMessage(text) {
    socket.emit('message', text);
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
