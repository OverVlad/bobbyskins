import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Chat from '../../components/Chat';

import * as chatroomActions from '../../actions/chatroomActions';
import * as roomsActions from '../../actions/roomsActions';

const mapStateToProps = ({ user, chatroom, rooms }) => ({ user, chatroom, rooms });

const mapDispatchToProps = (dispatch) => ({
    chatroomActions: bindActionCreators(chatroomActions, dispatch),
    roomsActions: bindActionCreators(roomsActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
