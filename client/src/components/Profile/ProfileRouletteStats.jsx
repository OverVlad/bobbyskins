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
      <div className="profile-data-wrapper">
        <h2>История ставок в рулетке</h2>

        <div className="wrapper">
          <div className="common-stats">
            <table>
              <tbody>
                <tr>
                  <td>Общее количество ставок:</td>
                  <td>164</td>
                </tr>
                <tr>
                  <td>Общая сумма ставок:</td>
                  <td>
                    <p className="amount">194 500</p>
                    <i className="fa fa-diamond" aria-hidden="true"></i>
                  </td>
                </tr>
                <tr>
                  <td>Наибольший выигрыш:</td>
                  <td>
                    <p className="amount">140 000</p>
                    <i className="fa fa-diamond" aria-hidden="true"></i>
                  </td>
                </tr>
                <tr>
                  <td>Общий выигрыш:</td>
                  <td>
                    <p className="amount">276 300</p>
                    <i className="fa fa-diamond" aria-hidden="true"></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="wrapper">
          Content for roulette-stats
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({ user });
export default connect(mapStateToProps)(ProfileRouletteStats);
