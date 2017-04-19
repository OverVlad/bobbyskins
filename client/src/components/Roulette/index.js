import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import AlertContainer from 'react-alert';

import ProgressBar from './ProgressBar.jsx'
import Wheel from './Wheel.jsx'
import Balance from './Balance.jsx'
import BetBlock from './BetBlock.jsx'
import HistoryRolls from './HistoryRolls.jsx'

import socket from '../../utils/socket';
import { rolling } from '../../utils/rolling';

class Roulette extends Component {

  constructor(props) {

    super(props);

    this.state = {
      balance: 1000000,
      ownBets: {
        '0': 0,
        '1-7': 0,
        '8-14': 0,
        'even': 0,
        'odd': 0
      },
      bet: {
        amount: 0,
        type: '',
        userId: 0
      },
      totalBets: {
        '0' : {
          amount: 0,
          people: 0,
          users: []
        },
        '1-7': {
          amount: 0,
          people: 0,
          users: []
        },
        '8-14': {
          amount: 0,
          people: 0,
          users: []
        },
        'even': {
          amount: 0,
          people: 0,
          users: []
        },
        'odd': {
          amount: 0,
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
    let bet = this.state.bet.amount;

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
        amount: bet
      }
    });
  }

  addBet(event) {
    const type = event.target.dataset.bet;
    const bet = this.state.bet;
    const totalBets = this.state.totalBets;
    const ownBets = this.state.ownBets;
    const user = this.props.user;

    bet.type = type;
    bet.userId = user.id;
    bet.roundId = 1; //TODO: round.id

    if(bet.amount === 0) {
      msg.show('The bet should not be zero');
      return;
    }

    socket.emit('bet', bet);

    totalBets[type].amount += bet.amount;
    totalBets[type].people += 1;
    totalBets[type].users.push(user);

    ownBets[type] = bet.amount;

    const balance = this.state.balance - bet;

    // this.setState({
    //   totalBets: totalBets,
    //   ownBets: ownBets,
    //   balance: balance,
    //   bet: {
    //     id: this.state.bet.id + 1,
    //     amount: 0
    //   }
    // });

    msg.success(`Your bet ${bet.amount} accepted`);
  }

  handleChange(event) {
    this.setState({
      bet:
      {
        id: this.state.bet.id,
        amount: event.target.value
      }
    });
  }

  componentWillMount() {
    socket.emit('history rolls', this.props.roulette.historyRolls);
    socket.emit('join roulette');
  }

  render() {
    const { done, isRoll, historyRolls } = this.props.roulette;
    const { roll } = this.props.roulette.round;

    if(isRoll) rolling(roll);

    return (
      <Row>
          <Col xs={12}>
            <Col xs={12} className="roulette wrapper">
              { !done ? <Col xs={12}>Loading...</Col> : <ProgressBar startTime={this.props.roulette.round.startTime} isRoll={isRoll} roll={roll} /> }
              <Wheel />

              {historyRolls.length ? <HistoryRolls historyRolls={historyRolls} /> : null}

              <Balance
                balance={this.state.balance}
                bet={this.state.bet.amount}
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
          </Col>
      </Row>
    );
  }
}

export default Roulette;
