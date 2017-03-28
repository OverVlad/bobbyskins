import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Roulette from '../../components/Roulette';
import * as rouletteActions from '../../actions/roulette';

const mapStateToProps = (state) => ({
    user: state.user
});

export default connect(mapStateToProps)(Roulette);
