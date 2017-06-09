import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactTable from 'react-table';
import { fetchTransferHistory } from '../../actions/profileActions';

class ProfileTransferHistory extends Component {
  // componentDidMount() {
  //   const { dispatch, user } = this.props
  //   dispatch(fetchTransferHistory(user));
  // }

  render() {
    let data = []

    for (let i = 0; i < 55; i++) {
      data.push({
        transferId: '123456',
        from: 'Gaben',
        to: 'Vasya',
        transferAmount: '13500',
        note: 'HL3 coming soon',
        time: '13:33:33',
      });
    }

    const columns = [{
      Header: 'Номер перевода',
      accessor: 'transferId'
    },
    {
      Header: 'Отправитель',
      accessor: 'from'
    },
    {
      Header: 'Получатель',
      accessor: 'to'
    },
    {
      Header: 'Размер перевода',
      accessor: 'transferAmount'
    },
    {
      Header: 'Заметки',
      accessor: 'note'
    },
    {
      Header: 'Время',
      accessor: 'time'
    }];

    return (
      <div className="profile-data-wrapper">
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
export default connect(mapStateToProps)(ProfileTransferHistory);
