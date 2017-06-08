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
    const data = [{
      betId: '123456',
      round: '12345',
      time: '14:45:12',
      betAmount: '13500',
      bet: 'Нечетные',
      roll: '10',
      profit: '10000',
    },{
      betId: '123456',
      round: '12345',
      time: '14:45:12',
      betAmount: '13500',
      bet: 'Нечетные',
      roll: '10',
      profit: '55500',
    },{
      betId: '123456',
      round: '12345',
      time: '14:45:12',
      betAmount: '13500',
      bet: 'Нечетные',
      roll: '10',
      profit: '55500',
    },{
      betId: '123456',
      round: '12345',
      time: '14:45:12',
      betAmount: '13500',
      bet: 'Нечетные',
      roll: '10',
      profit: '55500',
    },{
      betId: '123456',
      round: '12345',
      time: '14:45:12',
      betAmount: '13500',
      bet: 'Нечетные',
      roll: '10',
      profit: '55500',
    }];

    const columns = [{
      Header: 'Номер ставки',
      accessor: 'betId'
    },
    {
      Header: 'Номер раунда',
      accessor: 'round'
    },
    {
      Header: 'Время',
      accessor: 'time'
    },
    {
      Header: 'Размер ставки',
      accessor: 'betAmount'
    },
    {
      Header: 'Ставка на',
      accessor: 'bet'
    },
    {
      Header: 'Выпало',
      accessor: 'roll'
    },{
      Header: 'Прибыль',
      accessor: 'profit'
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
          <button>Забрать прибыль</button>
        </div>

        <div className="wrapper">
          <ReactTable
            data={data}
            columns={columns}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({ user });
export default connect(mapStateToProps)(ProfileReferalSystem);
