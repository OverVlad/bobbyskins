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
      <div className="profile-data-wrapper">
        <div className="wrapper">
          <div className="common-stats">
            <table>
              <tbody>
                <tr>
                  <td>Уровень:</td>
                  <td>Бронза</td>
                </tr>
                <tr>
                  <td>Посетителей:</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>Вкладчики:</td>
                  <td>0/50 до Серебра</td>
                </tr>
                <tr>
                  <td>Всего ставок:</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>Прибыль за все время:</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>Доступно сейчас:</td>
                  <td>0</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="collect-earnings">
          <button>Забрать прибыль</button>
        </div>

        <div className="wrapper">
          Content for table
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({ user });
export default connect(mapStateToProps)(ProfileReferalSystem);
