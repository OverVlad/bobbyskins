import React, { Component, PropTypes } from 'react';
import {emojify} from 'react-emojione';

const options = {
  convertShortnames: true,
  convertUnicode: true,
  convertAscii: true,
  styles: {
    backgroundImage: 'url(https://cdnjs.cloudflare.com/ajax/libs/emojione/1.5.2/assets/sprites/emojione.sprites.png)',
    width: '32px',
    height: '32px',
    margin: '4px'
  }
};

class Message extends Component {

  render() {
    const role = this.props.isYou ? 'own' : this.props.role

    return (
      <div className={`chat-message message-${role}`}>
        <div className="message__avatar">
          <img className="message-avatar" src={this.props.imgUrl}/>
        </div>

        <div className="message-container">
          <div className="message-name">{this.props.name}</div>

          <div className="message-text">
            {emojify(this.props.text, options)}
          </div>
        </div>
      </div>
    );
  }

}

Message.propTypes = {
  isYou: PropTypes.bool,
  imgUrl: PropTypes.string,
  name: PropTypes.string,
  text: PropTypes.string,
};

export default Message;
