import React from 'react';
import { connect } from 'react-redux';

const ProfileDataNoData = ({ user, ...rest }) => {
  if (user.pokerStatsIsFetching || user.rouletteStatsIsFetching) {
    return null;
  }
  return <div className="rt-noData">Нет данных</div>
}

const mapStateToProps = ({ user }) => ({ user });
export default connect(mapStateToProps)(ProfileDataNoData);
