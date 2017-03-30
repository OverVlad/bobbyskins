import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Roulette from '../../components/Roulette';
import * as rouletteActions from '../../actions/roulette';

import Style from '../../assets/css/roulette.scss'

const mapStateToProps = (state) => ({
    user: state.user
});

export default connect(mapStateToProps)(Roulette);
