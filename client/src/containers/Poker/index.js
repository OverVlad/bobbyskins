import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Poker from '../../components/Poker';

import * as pokerActions from '../../actions/pokerActions';

const mapStateToProps = ({ poker, user }) => ({ poker, user });

const mapDispatchToProps = (dispatch) => ({
  pokerActions: bindActionCreators(pokerActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Poker);
