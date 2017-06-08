import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactTable from 'react-table';
import { fetchPokerStats } from '../../actions/profileActions';

class ProfilePokerStats extends Component {
  // componentDidMount() {
  //   const { dispatch, user } = this.props
  //   dispatch(fetchPokerStats(user));
  // }

  render() {
    let data = [];

    for (let i = 0; i < 55; i++) {
      data.push({
        betId: '123456',
        time: '14:45:12',
        betAmount: '13500',
        combination: '10',
        profit: '10000',
      });
    }

    const columns = [{
      Header: 'Номер ставки',
      accessor: 'betId'
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
      Header: 'Выпавшая комбинация',
      accessor: 'combination'
    }
    ,{
      Header: 'Прибыль',
      accessor: 'profit'
    }];

    return (
      <div className="profile-data-wrapper">
        <h2>История ставок в покере</h2>

        <div className="wrapper">
          <div className="common-stats">
            <table>
              <tbody>
                <tr>
                  <td>Общее количество игр:</td>
                  <td>35</td>
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
export default connect(mapStateToProps)(ProfilePokerStats);
