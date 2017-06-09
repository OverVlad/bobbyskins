import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactTable from 'react-table';
import { fetchRouletteStats } from '../../actions/profileActions';

class ProfileRouletteStats extends Component {
  // componentDidMount() {
  //   const { dispatch, user } = this.props
  //   dispatch(fetchRouletteStats(user));
  // }

  render() {
    let data = [];

    for (let i = 0; i < 55; i++) {
      data.push({
        betId: '123456',
        round: '12345',
        time: '14:45:12',
        betAmount: '13500',
        bet: 'Нечетные',
        roll: '10',
        profit: '10000',
      });
    }

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
        <h2 className="stats-header">История ставок в рулетке</h2>

        <div className="wrapper">
          <div className="common-stats">
            <table className="common-stats-table">
              <tbody className="common-stats-tbody">
                <tr className="common-stats-tr">
                  <td className="common-stats-td">Общее количество ставок:</td>
                  <td className="common-stats-td">164</td>
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
export default connect(mapStateToProps)(ProfileRouletteStats);
