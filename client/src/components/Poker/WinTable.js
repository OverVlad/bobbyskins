import React, { Component } from 'react'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
// import getWinForHand from '../../utils/getWinForHand'

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

export default class WinTable extends Component {

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.hand.length > 0 && (nextProps.hand !== this.props.hand)) {
  //     const winner = getWinForHand(nextProps.winner)
  //     this.setState({ winner })
  //   }
  // }

  render() {
    const ranksList = ranks.map((rank, index) => (
      <li
        className={`rank${((this.props.winner===index && !this.props.animationIsGoing) && '-win')}`}
        key={rank}
      >{rank}</li>
    ))
    return (
      <ul>
        <CSSTransitionGroup
          transitionName="rank-win"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {ranksList}
        </CSSTransitionGroup>
      </ul>
    )
  }

}
