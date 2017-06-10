export default [
  {
    Header: 'Номер ставки',
    accessor: '_id'
  },
  {
    Header: 'Номер раунда',
    accessor: 'round_id'
  },
  {
    Header: 'Время ставки',
    accessor: 'createdAt',
    minWidth: 130
  },
  {
    Header: 'Размер ставки',
    accessor: 'amount'
  },
  {
    Header: 'Ставка на',
    accessor: 'type'
  },
  {
    Header: 'Выпало',
    accessor: 'collect'
  },{
    Header: 'Прибыль',
    accessor: 'profit'
  }
];
