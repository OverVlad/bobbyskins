import React, { Component } from 'react';

import Message from './Message'
import Messages from './Messages'
import ChatInput from './ChatInput'

class Chat extends Component {

  constructor(props) {
    super(props);

    this.addMessage = this.addMessage.bind(this);
  }

  addMessage(text) {
    const { addMessage } = this.props.chatActions;

    const message = {
      name: this.props.user.name,
      text: text,
      imgUrl: this.props.user.imgUrl,
      role: this.props.user.role,
      own: true
    };
    addMessage(message);
  }

  render() {
    return (
      <div className="chat">
        <div className="chat-room">English room</div>
        <Messages messages={this.props.chat.data} />

        <ChatInput addMessage={this.addMessage}/>
      </div>
    );
  }

}

export default Chat;