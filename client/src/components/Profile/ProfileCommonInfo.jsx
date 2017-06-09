import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchCommonInfo } from '../../actions/profileActions';

class ProfileCommonInfo extends Component {
  // componentDidMount() {
  //   const { dispatch, user } = this.props
  //   dispatch(fetchCommonInfo(user));
  // }

  render() {
    return (
      <div className="wrapper">Content for common-info</div>
    );
  }
}

const mapStateToProps = ({ user }) => ({ user });
export default connect(mapStateToProps)(ProfileCommonInfo);
