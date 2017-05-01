import React, { Component } from 'react'

const ranks = [
  'Пара, х10',
  'Две пары, х20',
  'Сет, х30',
  'Стрит, х40',
  'Флеш, х50',
  'Фул Хаус. х60',
  'Карэ. х70',
  'Стрит Флеш, х80',
  'Роял Флеш, х90',
]

export default props => (
  <ul className="WinTable">
    {ranks.map((rank, index) => (
      <li
        className={`rank${((props.winner===index && !props.animationIsGoing) ? '-win' : '')}`}
        key={rank}
      >{rank}</li>
    )).reverse()}
  </ul>
)



