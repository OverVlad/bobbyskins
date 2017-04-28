import React, { Component } from 'react'
import pokersolver from 'pokersolver'
import Deck from './Deck'
// import '../../assets/css/poker/Poker.css'


const cards = [
  '2d', '3d', '4d', '5d', '6d', '7d', '8d', '9d', 'Td', 'Jd', 'Qd', 'Kd', 'Ad',
  '2s', '3s', '4s', '5s', '6s', '7s', '8s', '9s', 'Ts', 'Js', 'Qs', 'Ks', 'As',
  '2c', '3c', '4c', '5c', '6c', '7c', '8c', '9c', 'Tc', 'Jc', 'Qc', 'Kc', 'Ac',
  '2h', '3h', '4h', '5h', '6h', '7h', '8h', '9h', 'Th', 'Jh', 'Qh', 'Kh', 'Ah',
];

export default class PokerTable extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hand: [],
      rank: 0,
    }

    this.getRandomHand = this.getRandomHand.bind(this)
    this.getHandRank = this.getHandRank.bind(this)
    this.getRandomNumber = this.getRandomNumber.bind(this)
    this.getCards = this.getCards.bind(this)
  }

  getRandomHand() {
    const allCards = cards.concat()
    const hand = []
    for (let i = 0; i < 5; i++) {
      // const random = Math.floor(Math.random()*allCards.length - 1)
      // console.log(random)
      hand.push(allCards.splice((Math.floor(Math.random() * allCards.length) - 1), 1)[0])
    }
    // console.log(hand)
    this.setState(state => ({ hand }))
    return hand
  }

  getHandRank(hand) {
    // console.log(pokersolver.Hand.solve(hand).descr)
    let rank;
    if (pokersolver.Hand.solve(hand).descr === 'Royal Flush') {
      rank = 9
    } else {
      rank = pokersolver.Hand.solve(hand).rank - 1
    }
    this.setState(state => ({ rank }))
    return rank
  }


  getRandomNumber() {
    return Math.floor((Math.random() * 10))
  }

  getCards(combination) {
    this.getHandRank(this.getRandomHand())
  }

  render() {
    return (
      <div className="PokerTable">
        <button
          onClick={(e) => {
            this.getCards()
          }}
        >
          get cards
        </button>
        {this.state.hand} rank: {this.state.rank}
        <div>
          <Deck hand={this.state.hand} rank={this.state.rank} />
        </div>
      </div>
    );
  }
}
