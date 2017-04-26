import React, { Component } from 'react'
import { Row, Col } from 'react-flexbox-grid';
import axios from 'axios'
import Balance from './Balance.jsx'
import formatNumber from '../../utils/formatNumber'
import separateThousands from '../../utils/separateThousands'

export default class Poker extends Component {
  constructor(props) {
    super(props)

    this.state = {
      balance: 23045,
      userId: 0,
      bet: {
        amount: 0,
      },
      betAmount: 0,
      buttonDisabled: false,
    };

    this.user = props.user
    this.handleBetClick = this.handleBetClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.rollCards = this.rollCards.bind(this)
  }

  rollCards() {
    if (this.state.betAmount === 0) {
      msg.show(`please place your bets`)
      return null
    }
    if (this.state.betAmount > this.state.balance) {
      this.setState(state => ({ betAmount: state.balance }))
    }
    this.setState(state => {
      console.log(state.betAmount)
      return ({ buttonDisabled: true })
    })
    // random 0-9
    axios(`https://www.random.org/integers/?format=plain&base=10&num=1&max=9&min=0&col=1&rnd=new`)
    .then(response => {
      console.log(response.data)
      this.setState(state => ({ buttonDisabled: false }))
    })
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
        amount = parseInt((amount/2), 10)
        break;
      case 'double':
        amount *= 2
        break;
      case 'max':
        amount = this.state.balance
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
      if (amount >= state.balance) {
        msg.show(`You don't have enough money: ${separateThousands(state.balance)}`)
        return ({ betAmount: state.balance })
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
            Poker serve
            <Balance
              balance={this.state.balance}
              betAmount={formatNumber(this.state.betAmount)}
              handleClick={this.handleBetClick}
              handleChange={this.handleChange}
            />
            <button
              disabled={this.state.buttonDisabled}
              className="btn btn-bet btn-red"
              onClick={this.rollCards}
            >
              ROLL CARDS
            </button>
            <button
              className="btn btn-bet btn-blue"
              onClick={() => { this.setState(state => ({ balance: state.balance-1000 })) }}
            >
              change balance
            </button>
          </Col>

        </Col>
      </Row>
    )
  }
}
