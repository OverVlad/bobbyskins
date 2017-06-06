import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchTradeHistory } from '../../actions/profileActions';

class ProfileTradeHistory extends Component {
  // componentDidMount() {
  //   const { dispatch, user } = this.props
  //   dispatch(fetchTradeHistory(user));
  // }

  render() {
    return (
      <div>Content for trade-history</div>
    );
  }
}

const mapStateToProps = ({ user }) => ({ user });
export default connect(mapStateToProps)(ProfileTradeHistory);
