import React, { Component } from 'react'
import { Row, Col } from 'react-flexbox-grid';
import pokersolver from 'pokersolver'
import Balance from './Balance.jsx'
import Deck from './Deck'
import WinTable from './WinTable'
import separateThousands from '../../utils/separateThousands'
import getRandomHand from '../../utils/getRandomHand'

export default class Poker extends Component {
  constructor(props) {
    super(props)

    this.winNumbers = [-1, 1, 1.5, 2, 2.5, 3, 4, 19, 49, 99]
    this.state = {
      userId: this.props.user.id,
      betAmount: 0,
      hand: [],
      handRank: -1,
      animationIsGoing: false,
      disableButtonsForRequest: false,
    };

    this.rollCards = this.rollCards.bind(this)
    this.handleBetClick = this.handleBetClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.changeBetAmount = this.changeBetAmount.bind(this)
    this.completeAnimation = this.completeAnimation.bind(this)
  }

  getWinForHand = (hand) => (this.winNumbers[this.getRankForHand(hand)])

  getRankForHand = (hand) => {
    if (pokersolver.Hand.solve(hand).descr === 'Royal Flush') {
      return 9
    } else {
      return pokersolver.Hand.solve(hand).rank - 1
    }
  }

  rollCards() {
    const betAmount = this.state.betAmount
    console.log(betAmount <= 0)
    if (betAmount <= 0) {
      msg.show(`please place your bets`)
      return null
    } else { console.log(betAmount) }
    if (this.state.betAmount > this.props.user.balance) {
      console.log('setState')
      this.setState({ betAmount: this.props.user.balance })
    }
    this.setState({ disableButtonsForRequest: true })
    // console.log('rollCards', this.state.betAmount)
    // AJAX HERE
    setTimeout(() => {
      this.setState({ hand: getRandomHand(5), animationIsGoing: true })
    }, 500)
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
    this.changeBetAmount(e.target.value.toString().replace(/[^0-9\\.]+/g, ''))
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
    this.setState({
      animationIsGoing: false,
      disableButtonsForRequest: false,
      handRank: this.getRankForHand(this.state.hand),
    }, () => {
      this.props.userActions.changeUserBalance(this.state.betAmount, this.getWinForHand(this.state.hand))
    })
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.betAmount > nextProps.user.balance) {
      this.setState(() => ({ betAmount: nextProps.user.balance }))
    }
  }

  render() {
    return (
      <div className="wrapper">
        <Row>
          <Col xs={12} sm={9} >
            <Deck
              hand={this.state.hand}
              completeAnimation={this.completeAnimation}
              animationIsGoing={this.state.animationIsGoing}
              animationLength={200}
            />
          </Col>
          <Col xs={12} sm={3}>
            <WinTable animationIsGoing={this.state.animationIsGoing} hand={this.state.hand} bet={this.state.betAmount} winner={this.state.handRank} numbers={this.winNumbers} />
          </Col>
        </Row>
        <Balance
          balance={this.props.user.balance}
          betAmount={this.state.betAmount}
          handleBetClick={this.handleBetClick}
          handleChange={this.handleChange}
          changeBetAmount={this.changeBetAmount}
          disabled={this.state.animationIsGoing || this.state.disableButtonsForRequest}
          rollCards={this.rollCards}
        />
      </div>
    )
  }
}
