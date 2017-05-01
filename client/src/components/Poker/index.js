import React, { Component } from 'react'
import { Row, Col } from 'react-flexbox-grid';
import Balance from './Balance.jsx'
import Deck from './Deck'
import WinTable from './WinTable'
import separateThousands from '../../utils/separateThousands'
import getRandomHand from '../../utils/getRandomHand'
import getWinForHand from '../../utils/getWinForHand'
import getRankForHand from '../../utils/getRankForHand'

export default class Poker extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userId: this.props.user.id,
      betAmount: 0,
      hand: [],
      handRank: -1,
      animationIsGoing: false,
      disableButtonsForRequest: false,
    };

    this.rollCards = this.rollCards.bind(this)
    this.getCards = this.getCards.bind(this)
    this.handleBetClick = this.handleBetClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.changeBetAmount = this.changeBetAmount.bind(this)
    this.completeAnimation = this.completeAnimation.bind(this)
  }

  rollCards() {
    if (this.state.betAmount === 0) {
      msg.show(`please place your bets`)
      return null
    }
    if (this.state.betAmount > this.props.user.balance) {
      this.setState({ betAmount: this.props.user.balance })
    }
    this.setState({ disableButtonsForRequest: true })
    // console.log('rollCards', this.state.betAmount)
    // AJAX HERE
    setTimeout(() => {
      this.setState({ hand: getRandomHand(5), animationIsGoing: true })
    }, 500)
  }

  getCards() {
    this.setState({ hand: getRandomHand(5), animationIsGoing: true })
  }

  handleBetClick(e) {
    e.preventDefault()
    const action = e.target.dataset.action
    let amount = this.state.betAmount

    switch (action) {
      case '500':
        amount += 500
        break;
      case '1000':
        amount += 1000
        break;
      case '3000':
        amount += 3000
        break;
      case '5000':
        amount += 5000
        break;
      case '10000':
        amount += 10000
        break;
      case 'max':
        amount = this.props.user.balance
        break;
      case 'reset':
        amount = 0
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

  completeAnimation() {
    // console.log('complete animation', this.props.user.balance)
    const winner = getRankForHand(this.state.hand)
    this.setState({
      animationIsGoing: false,
      disableButtonsForRequest: false,
      handRank: getRankForHand(this.state.hand),
    }, () => {
      this.props.userActions.changeUserBalance(this.state.betAmount, getWinForHand(this.state.hand))
    })
  }

  render() {
    return (
      <Row className="poker wrapper" style={{ width: '1000px' }}>
        <Col xs={12} sm={9} >
          <Deck
            hand={this.state.hand}
            completeAnimation={this.completeAnimation} animationIsGoing={this.state.animationIsGoing}
          />
          <Balance
            balance={this.props.user.balance}
            betAmount={this.state.betAmount}
            handleBetClick={this.handleBetClick}
            handleChange={this.handleChange}
            changeBetAmount={this.changeBetAmount}
            disabled={this.state.animationIsGoing || this.state.disableButtonsForRequest}
            rollCards={this.rollCards}
          />
        </Col>
        <Col xs={12} sm={3} >
          <WinTable animationIsGoing={this.state.animationIsGoing} hand={this.state.hand} bet={this.state.betAmount} winner={this.state.handRank} />
        </Col>
      </Row>
    )
  }
}
