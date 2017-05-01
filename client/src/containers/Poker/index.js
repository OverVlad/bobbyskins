import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Poker from '../../components/Poker';

import * as pokerActions from '../../actions/pokerActions';

const mapStateToProps = ({ user, poker }) => ({ user, poker });

const mapDispatchToProps = (dispatch) => ({
  pokerActions: bindActionCreators(pokerActions, dispatch),
  userActions: bindActionCreators(pokerActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Poker);
