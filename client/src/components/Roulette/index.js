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
      bet: 0,
      disabled: {
        '0': false,
        '1-7': false,
        '8-14': false,
        'even': false,
        'odd': false
      }
    };

    this.user = props.user;

    this.handleBetClick = this.handleBetClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addBet = this.addBet.bind(this);
  }

  handleBetClick(event) {
    event.preventDefault();

    const action = event.target.dataset.action;
    let bet = this.state.bet;

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
      bet: bet
    });
  }

  addBet(event) {
    const type = event.target.dataset.bet;

    const bet = {
      amount: this.state.bet,
      type,
      roundId: this.props.roulette.round.id
    }

    if(bet.amount === 0) {
      msg.show('The bet should not be zero');
      return;
    }

    if(this.state.balance < bet.amount) {
      msg.show('You don\'t have enough coins');
      return;
    }

    this.setState(state => {
      const disabled = { ...state.disabled, [type]: !state.disabled[type] };
      return ({ disabled: disabled });
    });

    socket.emit('add bet', bet);
  }

  handleChange(event) {
    this.setState({
      bet: event.target.value
    });
  }

  componentWillMount() {
    socket.emit('history rolls', this.props.roulette.historyRolls);
    socket.emit('join roulette');
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.roulette.isRoll && this.props.roulette.isRoll !== nextProps.roulette.isRoll) {
      rolling(nextProps.roulette.round.roll);
    }
  }

  render() {
    const { done, isRoll, historyRolls } = this.props.roulette;
    const { roll, startTime, ownBets, totalBets } = this.props.roulette.round;
    const { balance, disabled, bet } = this.state;

    return (
      <Row>
          <Col xs={12}>
            <Col xs={12} className="roulette wrapper">
              { !done ? <Col xs={12}>Loading...</Col> : <ProgressBar startTime={startTime} isRoll={isRoll} roll={roll} /> }
              <Wheel />

              {historyRolls.length ? <HistoryRolls historyRolls={historyRolls} /> : null}

              <Balance
                balance={balance}
                bet={bet}
                handleClick={this.handleBetClick}
                handleChange={this.handleChange}
                />
            </Col>

            <Col xs={12}>
              <BetBlock
                addBet={this.addBet}
                totalBets={totalBets}
                ownBets={ownBets}
                disabled={disabled}
                />
            </Col>

            <AlertContainer ref={(a) => global.msg = a} {...this.alertOptions} />
          </Col>
      </Row>
    );
  }
}

export default Roulette;
