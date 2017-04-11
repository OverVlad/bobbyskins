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
      bet: {
        id: 0,
        count: 0
      },
      totalBets: {
        '0' : {
          count: 0,
          people: 0,
          users: []
        },
        '1-7': {
          count: 0,
          people: 0,
          users: []
        },
        '8-14': {
          count: 0,
          people: 0,
          users: []
        },
        'even': {
          count: 0,
          people: 0,
          users: []
        },
        'odd': {
          count: 0,
          people: 0,
          users: []
        }
      },
    };

    this.user = props.user;

    this.handleBetClick = this.handleBetClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addBet = this.addBet.bind(this);
  }

  handleBetClick(event) {
    event.preventDefault();

    const action = event.target.dataset.action;
    let bet = this.state.bet.count;

    if(this.state.balance <= bet && action !== 'reset') {
      msg.show('You don\'t have anoth money');
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
      bet: {
        id: this.state.bet.id,
        count: bet
      }
    });
  }

  addBet(event) {
    const type = event.target.dataset.bet;
    const bet = this.state.bet;
    const totalBets = this.state.totalBets;
    const ownBets = this.state.ownBets;

    if(bet.count === 0) {
      msg.show('The bet should not be zero');
      return;
    }

    const user = Object.assign({}, this.user, {bet: bet});

    totalBets[type].count += bet.count;
    totalBets[type].people += 1;
    totalBets[type].users.push(user);

    ownBets[type] = bet.count;

    const balance = this.state.balance - bet;

    this.setState({
      totalBets: totalBets,
      ownBets: ownBets,
      balance: balance,
      bet: {
        id: this.state.bet.id + 1,
        count: 0
      }
    });

    msg.success(`Your bet ${bet.count} accepted`);
  }

  handleChange(event) {
    this.setState({
      bet:
      {
        id: this.state.bet.id,
        count: event.target.value
      }
    });
  }

  componentDidMount() {
    progressBar(20.00, 20.00);
  }

  componentWillReceiveProps() {
    stopProgressbar();
  }


  render() {
    return (
      <Row>
        <Col xs={12} className="roulette wrapper">
          <ProgressBar />
          <Wheel />
          <Balance
            balance={this.state.balance}
            bet={this.state.bet.count}
            handleClick={this.handleBetClick}
            handleChange={this.handleChange}
            />
        </Col>

        <Col xs={12}>
          <BetBlock
            addBet={this.addBet}
            totalBets={this.state.totalBets}
            ownBets={this.state.ownBets}
            />
        </Col>

        <AlertContainer ref={(a) => global.msg = a} {...this.alertOptions} />
      </Row>
    );
  }
}

export default Roulette;
