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
      balance: this.props.user.balance,
      userId: this.props.user.id,
      betAmount: this.props.betAmount,
      buttonDisabled: false,
    };

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

  render() {
    return (
      <Row>
        <Col xs={12}>
          <Col xs={12} className="poker wrapper" >
            Poker serve
            <Balance
              balance={this.state.balance}
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
