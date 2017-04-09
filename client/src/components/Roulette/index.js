import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import AlertContainer from 'react-alert';

import { progressBar } from '../../utils/progressBar';

import ProgressBar from './ProgressBar.jsx'
import Wheel from './Wheel.jsx'
import Balance from './Balance.jsx'
import BetBlock from './BetBlock.jsx'

class Roulette extends Component {

  constructor(props) {
    super(props);

    this.state = {
      startAngle: Math.floor(360*Math.random()),
      balance: 1000000,
      ownBets: {
        '0': 0,
        '1-7': 0,
        '8-14': 0,
        'even': 0,
        'odd': 0
      },
      bet: 0,
      totalBets: {
        '0' : {
          count: 0,
          people: 0
        },
        '1-7': {
          count: 0,
          people: 0
        },
        '8-14': {
          count: 0,
          people: 0
        },
        'even': {
          count: 0,
          people: 0
        },
        'odd': {
          count: 0,
          people: 0
        }
      },
    };

    this.alertOptions = {
      offset: 14,
      position: 'bottom left',
      theme: 'dark',
      time: 5000,
      transition: 'scale'
    };

    this.handleBetClick = this.handleBetClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addBet = this.addBet.bind(this);
  }

  handleBetClick(event) {
    event.preventDefault();

    const action = event.target.dataset.action;
    let bet = this.state.bet;
    if(this.state.balance < bet) {
      alert('You don\'t have anoth money');
      return;
    }

    switch(action) {
      case 'reset':
      bet = 0;
      break;
      case 'half':
      bet /= 2;
      break;
      case 'double':
      bet *= 2;
      break;
      case 'max':
      bet = this.state.balance;
      break;
      default:
      bet += +action;
    }

    this.setState({
      bet: bet
    });
  }

  addBet(event) {
    const type = event.target.dataset.bet;
    const bet = this.state.bet;
    const totalBets = this.state.totalBets;
    const ownBets = this.state.ownBets;

    if(bet === 0) {
      msg.show('The bet should not be zero');
      return;
    }

    totalBets[type].count += bet;
    totalBets[type].people += 1;
    ownBets[type] = bet;

    const balance = this.state.balance - bet;
    this.setState({
      totalBets: totalBets,
      ownBets: ownBets,
      balance: balance,
      bet: 0
    });
  }

  handleChange(event) {
    this.setState({
      bet: event.target.value
    });
  }

  showAlert(text, type='warning'){
    ыкс
    msg.show(text, {
      time: 2000,
      type: type,
      icon: <img src={`/img/${type}.png`} />
  });
}

componentDidMount() {
  progressBar(20.00, 20.00);
}

render() {
  return (
    <Row>
      <Col xs={12} className="roulette">
        <ProgressBar />
        <Wheel />
        <Balance
          balance={this.state.balance}
          bet={this.state.bet}
          handleClick={this.handleBetClick}
          handleChange={this.handleChange}
          />
      </Col>

      <Col xs={12}>
        <BetBlock bet={this.state.bet} addBet={this.addBet} totalBets={this.state.totalBets} ownBets={this.state.ownBets} />
      </Col>

      <AlertContainer ref={(a) => global.msg = a} {...this.alertOptions} />
    </Row>
  );
}
}

export default Roulette;
