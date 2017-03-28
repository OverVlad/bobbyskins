import React, { Component } from 'react';
import EmojiPicker from 'emojione-picker';

import Message from './Message'

class Messages extends Component {

componentDidUpdate() {
  // get the messagelist container and set the scrollTop to the height of the container
  const objDiv = document.getElementById('chat-container');
  objDiv.scrollTop = objDiv.scrollHeight;
}

  render() {
    return (
      <div className="chat-container" id="chat-container">
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
