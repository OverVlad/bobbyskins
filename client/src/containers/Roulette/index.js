import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Roulette from '../../components/Roulette';

import * as rouletteActions from '../../actions/rouletteActions';

const mapStateToProps = ({ roulette, user }) => ({ roulette, user });

const mapDispatchToProps = (dispatch) => ({
    rouletteActions: bindActionCreators(rouletteActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Roulette);
