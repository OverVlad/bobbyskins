import React, { Component } from 'react';
import { connect } from 'react-redux'
import ReactTable from 'react-table'
import { fetchRouletteStats } from '../../actions/profileActions';

class ProfileRouletteStats extends Component {
  // componentDidMount() {
  //   const { dispatch, user } = this.props
  //   dispatch(fetchRouletteStats(user));
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
export default connect(mapStateToProps)(ProfileRouletteStats);
