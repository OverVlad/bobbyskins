import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchReferals } from '../../actions/profileActions';

class ProfileReferalSystem extends Component {
  // componentDidMount() {
  //   const { dispatch, user } = this.props
  //   dispatch(fetchReferals(user));
  // }

  render() {
    return (
      <div className="wrapper">Content for referal-system</div>
    );
  }
}

const mapStateToProps = ({ user }) => ({ user });
export default connect(mapStateToProps)(ProfileReferalSystem);
