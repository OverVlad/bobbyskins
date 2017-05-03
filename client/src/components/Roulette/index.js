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
      bet: 0,
      disabled: {
        '0': true,
        '1-7': true,
        '8-14': true,
        'even': true,
        'odd': true
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

    if(this.props.user.balance <= bet && action !== 'reset') {
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
      bet = this.props.user.balance;
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

    this.setState(state => {
      return ({
        bet: 0
      });
    });
  }

  disableBets() {
    this.setState(state => {
      let disabled = state.disabled;
      for (let i in state.disabled) {
        disabled[i] = true;
      }

      return { disabled };
    });
  }

  enableBets() {
    this.setState(state => {
      let disabled = state.disabled;
      for (let i in state.disabled) {
        disabled[i] = false;
      }

      return { disabled };
    });
  }

  handleChange(event) {
    this.setState({
      bet: event.target.value
    });
  }

  ckeckBets() {
    const { ownBets } = this.props.roulette.round;
    const { disabled } = this.state;

    for (let i in ownBets) {
      console.log(ownBets[i]);
      if(ownBets[i]) {
        disabled[i] = true;
        this.setState({ disabled });
      }
    }
  }

  setWinners() {
    const { ownBets, winTypes } = this.props.roulette.round;

    const multipliers = {
      'odd': 2,
      '1-7': 2,
      '0': 14,
      '8-14': 2,
      'even': 2
    }

    for (let i in ownBets) {
      winTypes.map(winType => {
        if(i === winType) {
          ownBets[i] *= multipliers[winType];
        }
      })
    }

    this.setState({ ownBets });
    socket.emit('refresh balance', this.props.user.id);
  }

  componentDidMount() {
    socket.emit('history rolls', this.props.roulette.historyRolls);
    socket.emit('join roulette');

  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.roulette.isRoll && this.props.roulette.isRoll !== nextProps.roulette.isRoll) {
      rolling(nextProps.roulette.round.roll);
    }

    if(nextProps.roulette.isRoll && nextProps.roulette.isRoll) {
      this.disableBets();
    }

    if(nextProps.roulette.round.id !== this.props.roulette.round.id) {
      this.enableBets();
    }

    if(nextProps.roulette.round.winTypes && !nextProps.roulette.isRoll && nextProps.roulette.isRoll !== this.props.roulette.isRoll) {
      this.setWinners();
    }
  }

  render() {
    const { done, isRoll, historyRolls } = this.props.roulette;
    const { roll, startTime, ownBets, totalBets } = this.props.roulette.round;
    const { disabled, bet } = this.state;
    const { balance } = this.props.user;

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
