import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactTable from 'react-table';
import { fetchReferals } from '../../actions/profileActions';

class ProfileReferalSystem extends Component {
  // componentDidMount() {
  //   const { dispatch, user } = this.props
  //   dispatch(fetchReferals(user));
  // }

  render() {
    let data = [];

    for (let i = 0; i < 55; i++) {
      data.push({
        steamId: '123456',
        joined: '01.01.2016',
        totalBet: '666 000',
        comission: '6600',
      });
    }

    const columns = [{
      Header: 'Steam ID',
      accessor: 'steamId'
    },
    {
      Header: 'Зарегистрировался',
      accessor: 'joined'
    },
    {
      Header: 'Общая сумма ставок',
      accessor: 'totalBet'
    },
    {
      Header: 'Комиссия',
      accessor: 'comission'
    }];

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
          <button className="cta-button">Забрать прибыль</button>
        </div>

        <div className="table-wrapper">
          <ReactTable
            className='-striped -highlight'
            data={data}
            columns={columns}
            defaultPageSize={10}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({ user });
export default connect(mapStateToProps)(ProfileReferalSystem);
