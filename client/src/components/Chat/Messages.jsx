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
            name={this.props.user.username}
            text={message.text}
            imgUrl={this.props.user.avatar}
            role={this.props.user.name}
            isYou={message.own}
            />
        )}
      </div>
    );
  }

}

export default Messages;
