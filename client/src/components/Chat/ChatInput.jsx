import React, { Component, PropTypes } from 'react';

import EmojiPicker from 'emojione-picker';

class ChatInput extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value: '',
      showEmojiPicker: false
    };

    this.keyPress = this.keyPress.bind(this);
    this.setEmoji = this.setEmoji.bind(this);
    this.toggleEmojiPicker = this.toggleEmojiPicker.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  keyPress(e) {
    if (e.key === 'Enter' && e.target.value) {
      this.props.addMessage(this.state.value);
      this.setState({ value: '' })
    }
  }

  setEmoji(data) {
    this.setState({ value: this.state.value + data.shortname });
    this.toggleEmojiPicker();
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }


  toggleEmojiPicker() {
    this.setState({ showEmojiPicker: !this.state.showEmojiPicker });
  }

  render() {
    const role = this.props.isYou ? 'own' : this.props.role

    return (
      <form className="message-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          id="message-enter"
          className="message-enter"
          value={this.state.value}
          autoComplete="off"
          onChange={this.handleChange}
          placeholder="Enter your message..."
          onKeyPress={this.keyPress}
          />
        <span className="emoji-button" onClick={() => this.toggleEmojiPicker()}>+</span>
        {this.state.showEmojiPicker ?
          <div className="emoji-picker">
            <EmojiPicker
              onChange={this.setEmoji}
              />
          </div>
          :
          null
        }
      </form>
    );
  }

}

export default ChatInput;
