import React, { Component } from 'react'

const ranks = [
  'Pair',
  'Two pair',
  'Three of a kind',
  'Straight',
  'Flush',
  'Full house',
  'Four of a kind',
  'Straight flush',
  'Royal flush',
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



