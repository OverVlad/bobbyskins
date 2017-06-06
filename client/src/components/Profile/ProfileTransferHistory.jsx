import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchTransferHistory } from '../../actions/profileActions';

class ProfileTransferHistory extends Component {
  // componentDidMount() {
  //   const { dispatch, user } = this.props
  //   dispatch(fetchTransferHistory(user));
  // }

  render() {
    return (
      <div>Content for transfer-history</div>
    );
  }
}

const mapStateToProps = ({ user }) => ({ user });
export default connect(mapStateToProps)(ProfileTransferHistory);
