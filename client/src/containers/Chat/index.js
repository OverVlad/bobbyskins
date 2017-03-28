import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Chat from '../../components/Chat';
import * as chatActions from '../../actions/chat';

const mapStateToProps = (state) => ({
    chat: state.chat,
    user: state.user
});

const mapDispatchToProps = (dispatch) => ({
    chatActions: bindActionCreators(chatActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
