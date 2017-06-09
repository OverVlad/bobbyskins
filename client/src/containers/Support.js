import { connect } from 'react-redux';
import { toggleFaqBox } from '../actions/supportActions';
import SupportPage from '../components/SupportPage.jsx';

const mapStateToProps = (state) => (
  {
    faqBoxes: state.support
  }
)

const mapDispatchToProps = (dispatch) => {
  return {
    onFaqBoxClick: (id) => {
      dispatch(toggleFaqBox(id))
    }
  }
}

const Support = connect(
  mapStateToProps,
  mapDispatchToProps
)(SupportPage)

export default Support
