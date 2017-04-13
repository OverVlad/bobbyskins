import React, { Component } from 'react';
import EmojiPicker from 'emojione-picker';

import Message from './Message.jsx'

class Messages extends Component {

componentDidUpdate() {
  this.list.scrollTop = this.list.scrollHeight;
}

  render() {
    return (
      <div className="chat-container" id="chat-container" ref={list => this.list = list}>
        {this.props.messages.map((message, i) =>
          <Message
            key={i}
            name={message.name}
            text={message.text}
            imgUrl={message.imgUrl}
            role={message.role}
            isYou={message.own}
            />
        )}
      </div>
    );
  }

}

export default Messages;
