import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Chat from '../../components/Chat';
import * as chatActions from '../../actions/chatroomActions';

import socket from '../../utils/socket';

const mapStateToProps = ({ user, chatroom }) => ({ user, chatroom });

const mapDispatchToProps = (dispatch) => ({
    chatActions: bindActionCreators(chatActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
