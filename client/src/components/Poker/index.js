import React, { Component } from 'react'
import { Row, Col } from 'react-flexbox-grid';
import Balance from './Balance.jsx'
import Deck from './Deck'
import WinTable from './WinTable'
import separateThousands from '../../utils/separateThousands'
import getRandomHand from '../../utils/getRandomHand'
import getWinForHand from '../../utils/getWinForHand'
import pokerActions, { changeUserBalance } from '../../actions/pokerActions'
import store from '../../store'

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
    console.log('rollCards', this.state.betAmount)
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
        amount = this.props.user.balance
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
    console.log(this.props.user.balance)
    const winner = getWinForHand(this.state.hand)
    this.setState({
      animationIsGoing: false,
      disableButtonsForRequest: false,
      handRank: getWinForHand(this.state.hand),
    }, () => {
      store.dispatch(changeUserBalance(this.state.betAmount, this.state.handRank))
    })
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.user.balance)
  }

  render() {
    return (
      <Row>
        <Col xs={12} className="poker wrapper" >
          <Col>
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
            />
            <button
              disabled={this.state.animationIsGoing || this.state.disableButtonsForRequest}
              className="btn btn-bet btn-red"
              onClick={this.rollCards}
            >
              ROLL CARDS
            </button>
          </Col>
          <Col>
            <WinTable animationIsGoing={this.state.animationIsGoing} hand={this.state.hand} bet={this.state.betAmount} winner={this.state.handRank} />
          </Col>
        </Col>
      </Row>
    )
  }
}
