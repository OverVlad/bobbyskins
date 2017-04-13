import React, { Component } from 'react';

import Message from './Message.jsx'
import Messages from './Messages.jsx'
import ChatInput from './ChatInput.jsx'

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
    const { messages } = this.props.chatroom

    return (
      <div className="chat wrapper">
        <div className="chat-room">English room</div>
        <Messages messages={messages} />

        <ChatInput addMessage={this.addMessage}/>
      </div>
    );
  }

}

export default Chat;
