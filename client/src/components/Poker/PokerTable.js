import React, { Component } from 'react'
import Deck from './Deck'

export default props => (
  <div className="PokerTable">
    <div className="btn btn-bet btn-red" style={{display: 'inline-block'}}>{props.hand}</div>
    <div>
      <Deck hand={props.hand} completeAnimation={props.completeAnimation} animationIsGoing={props.animationIsGoing} />
    </div>
  </div>
)


