import React, { Component } from 'react'
import { Row, Col } from 'react-flexbox-grid';
import axios from 'axios'
import Balance from './Balance.jsx'
import PokerTable from './PokerTable'
import separateThousands from '../../utils/separateThousands'

const cards = [
  '2d', '3d', '4d', '5d', '6d', '7d', '8d', '9d', 'Td', 'Jd', 'Qd', 'Kd', 'Ad',
  '2s', '3s', '4s', '5s', '6s', '7s', '8s', '9s', 'Ts', 'Js', 'Qs', 'Ks', 'As',
  '2c', '3c', '4c', '5c', '6c', '7c', '8c', '9c', 'Tc', 'Jc', 'Qc', 'Kc', 'Ac',
  '2h', '3h', '4h', '5h', '6h', '7h', '8h', '9h', 'Th', 'Jh', 'Qh', 'Kh', 'Ah',
];

export default class Poker extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userId: this.props.user.id,
      betAmount: 0,
      hand: [],
      animationIsGoing: false,
    };

    this.rollCards = this.rollCards.bind(this)
    this.getRandomHand = this.getRandomHand.bind(this)
    this.getCards = this.getCards.bind(this)
    this.handleBetClick = this.handleBetClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.changeBetAmount = this.changeBetAmount.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.user)
    this.setState(state => ({
      balance: nextProps.user.balance,
      userId: nextProps.user.id,
    }))
  }

  rollCards() {
    // if (this.state.betAmount === 0) {
    //   msg.show(`please place your bets`)
    //   return null
    // }
    // if (this.state.betAmount > this.props.user.balance) {
    //   this.setState({ betAmount: this.props.user.balance })
    // }
    this.getCards()
    console.log('rollCards', this.state.betAmount)
    // random 0-9
    // axios(`https://www.random.org/integers/?format=plain&base=10&num=1&max=9&min=0&col=1&rnd=new`)
    // .then(response => {
    //   console.log(response.data)
    //   this.setState(state => ({ buttonDisabled: false }))
    // })
  }

  getRandomHand() {
    const allCards = cards.concat()
    const hand = []
    for (let i = 0; i < 5; i++) {
      hand.push(allCards.splice((Math.floor(Math.random() * allCards.length) - 1), 1)[0])
    }
    return hand
  }

  getCards() {
    this.setState({ hand: this.getRandomHand(), animationIsGoing: true })
  }

  handleBetClick(e) {
    e.preventDefault()
    const action = e.target.dataset.action
    let amount = this.state.betAmount

    switch (action) {
      case '10':
        amount += 10
        break;
      case '100':
        amount += 100
        break;
      case '1000':
        amount += 1000
        break;
      case 'reset':
        amount = 0
        break;
      case 'half':
        amount = parseInt((amount / 2), 10)
        break;
      case 'double':
        amount *= 2
        break;
      case 'max':
        amount = this.this.props.user.balance
        break;
      default:
        break;
    }
    this.changeBetAmount(amount)
  }

  handleChange(e) {
    this.changeBetAmount(parseInt(e, 10))
  }

  changeBetAmount(amount) {
    this.setState(state => {
      if (amount >= this.props.user.balance) {
        msg.show(`You don't have enough money: ${separateThousands(this.props.user.balance)}`)
        return ({ betAmount: this.props.user.balance })
      } else {
        return ({ betAmount: amount })
      }
    })
  }

  render() {
    return (
      <Row>
        <Col xs={12}>
          <Col xs={12} className="poker wrapper" >
            <PokerTable
              hand={this.state.hand}
              completeAnimation={() => { this.setState({ animationIsGoing: false }) }} animationIsGoing={this.state.animationIsGoing}
            />
            <Balance
              balance={this.props.user.balance}
              betAmount={this.state.betAmount}
              handleBetClick={this.handleBetClick}
              handleChange={this.handleChange}
              changeBetAmount={this.changeBetAmount}
              disabled={this.state.animationIsGoing}
            />
            <button
              disabled={this.state.animationIsGoing}
              className="btn btn-bet btn-red"
              onClick={this.rollCards}
            >
              ROLL CARDS
            </button>
          </Col>
        </Col>
      </Row>
    )
  }
}
