import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactTable from 'react-table';
import ProfileDataLoading from './ProfileDataLoading.jsx';
import ProfileDataNoData from './ProfileDataNoData.jsx';
import FetchError from './FetchError.jsx';
import { fetchPokerStats } from '../../actions/profileActions';
import pokerStatsColumns from '../../../configs/pokerStatsColumns';

class ProfilePokerStats extends Component {
  componentDidMount() {
    const { dispatch, user } = this.props
    dispatch(fetchPokerStats(user));
  }

  render() {
    const { user, dispatch } = this.props;

    if (user.pokerStatsFetchingError) {
      return (
        <FetchError
          message={user.pokerStatsFetchingError}
          onRetry={() => dispatch(fetchPokerStats(user))}
        />
      )
    }

    return (
      <div className="profile-data-wrapper">
        <h2 className="stats-header">История ставок в покере</h2>

        <div className="wrapper">
          <div className="common-stats">
            <table className="common-stats-table">
              <tbody className="common-stats-tbody">
                <tr className="common-stats-tr">
                  <td className="common-stats-td">Общее количество игр:</td>
                  <td className="common-stats-td">35</td>
                </tr>
                <tr className="common-stats-tr">
                  <td className="common-stats-td">Общая сумма ставок:</td>
                  <td className="common-stats-td">
                    <p className="amount">194 500</p>
                    <i className="fa fa-diamond" aria-hidden="true"></i>
                  </td>
                </tr>
                <tr className="common-stats-tr">
                  <td className="common-stats-td">Наибольший выигрыш:</td>
                  <td className="common-stats-td">
                    <p className="amount">140 000</p>
                    <i className="fa fa-diamond" aria-hidden="true"></i>
                  </td>
                </tr>
                <tr className="common-stats-tr">
                  <td className="common-stats-td">Общий выигрыш:</td>
                  <td className="common-stats-td">
                    <p className="amount">276 300</p>
                    <i className="fa fa-diamond" aria-hidden="true"></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="table-wrapper">
          <ReactTable
            className='-striped -highlight'
            data={user.pokerStats}
            columns={pokerStatsColumns}
            defaultPageSize={10}
            loading={user.pokerStatsIsFetching}
            LoadingComponent={ProfileDataLoading}
            NoDataComponent={ProfileDataNoData}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({ user });
export default connect(mapStateToProps)(ProfilePokerStats);
