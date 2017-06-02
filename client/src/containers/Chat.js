import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as chatroomActions from '../actions/chatroomActions';
import * as roomsActions from '../actions/roomsActions';

import React, { Component } from 'react';
import AlertContainer from 'react-alert';

import Message from '../components/Chat/Message.jsx'
import Messages from '../components/Chat/Messages.jsx'
import ChatInput from '../components/Chat/ChatInput.jsx'
import Rooms from '../components/Rooms';

import socket from '../utils/socket';

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


const mapStateToProps = ({ user, chatroom, rooms }) => ({ user, chatroom, rooms });

const mapDispatchToProps = (dispatch) => ({
    chatroomActions: bindActionCreators(chatroomActions, dispatch),
    roomsActions: bindActionCreators(roomsActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
