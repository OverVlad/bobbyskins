import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchRouletteStats } from '../../actions/profileActions';

class ProfileRouletteStats extends Component {
  // componentDidMount() {
  //   const { dispatch, user } = this.props
  //   dispatch(fetchRouletteStats(user));
  // }

  render() {
    return (
      <div className="wrapper">Content for roulette-statsy</div>
    );
  }
}

const mapStateToProps = ({ user }) => ({ user });
export default connect(mapStateToProps)(ProfileRouletteStats);
