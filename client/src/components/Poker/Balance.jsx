import React from 'react'
import formatNumber from '../../utils/formatNumber'
import separateThousands from '../../utils/separateThousands'

export default class Balance extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      balance: this.props.balance,
      betAmount: 0,
    }

    this.handleBetClick = this.handleBetClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.changeBetAmount = this.changeBetAmount.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.balance !== this.state.balance) {
      this.setState(() => ({ balance: nextProps.balance }))
    }
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
    const { betAmount, balance } = this.state
    return (
      <div className="balance">
        <span className="balance-text">Баланс: {separateThousands(balance)}</span>
        <input
          className="btn btn-bet btn-blue input-bet"
          value={separateThousands(formatNumber(betAmount)) || ''}
          placeholder="Bet amount"
          onChange={(e) => { this.handleChange(formatNumber(e.target.value)) }}
        />

        <button className="btn btn-bet btn-red" data-action="reset" onClick={this.handleBetClick}>Reset</button>
        <button className="btn btn-bet btn-blue" data-action="10" onClick={this.handleBetClick}>+10</button>
        <button className="btn btn-bet btn-blue" data-action="100" onClick={this.handleBetClick}>+100</button>
        <button className="btn btn-bet btn-blue" data-action="1000" onClick={this.handleBetClick}>+1000</button>
        <button className="btn btn-bet btn-blue" data-action="half" onClick={this.handleBetClick}>1/2</button>
        <button className="btn btn-bet btn-red" data-action="double" onClick={this.handleBetClick}>x2</button>
        <button className="btn btn-bet btn-red" data-action="max" onClick={this.handleBetClick}>Max</button>
      </div>
    );
  }
}
