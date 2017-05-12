import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col } from 'react-flexbox-grid';
import AlertContainer from 'react-alert';
import moment from 'moment'

import ProgressBar from '../../components/Roulette/ProgressBar.jsx'
import Wheel from '../../components/Roulette/Wheel.jsx'
import Balance from '../../components/Roulette/Balance.jsx'
import BetBlocks from '../../components/Roulette/BetBlocks.jsx'
import HistoryRolls from '../../components/Roulette/HistoryRolls.jsx'

import socket from '../../utils/socket';
import { rolling } from '../../utils/rolling';

import * as rouletteActions from '../../actions/rouletteActions';

class Roulette extends Component {

  constructor(props) {

    super(props);

    this.state = {
      bet: 0,
      text: 'Prepare to round',
      timeToEnd: this.props.roulette.round.startTime,
      timerEnable: false,
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

    if (this.props.user.balance <= bet && action !== 'reset' && action !== 'half') {
      msg.show('You don\'t have anoth money');
      return;
    }

    switch (action) {
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

  progressTimer = () => {
    const { startTime } = this.props.roulette.round;
    const timeToEnd = (20.00 - moment().diff(moment(startTime), 'seconds', true)).toFixed(2);

    if (timeToEnd < 0) {
      this.disableBets();
      this.setState({
        text: `Roll was started!`,
        timerEnable: false
      });
    } else {
      this.setState({
        timeToEnd,
        text: `Roll start after ${timeToEnd}`
      });
    }
  }

  addBet(event) {
    const type = event.target.dataset.bet;

    const bet = {
      amount: this.state.bet,
      type,
      roundId: this.props.roulette.round.id
    }

    if (bet.amount === 0) {
      msg.show('The bet should not be zero');
      return;
    }

    if (this.state.balance < bet.amount) {
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
      if (ownBets[i]) {
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
        if (i === winType) {
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
    const { startTime, roll } = nextProps.roulette.round;

    if (startTime) {
      this.setState({ startTime });
    }

    if (nextProps.roulette.isRoll && this.props.roulette.isRoll !== nextProps.roulette.isRoll) {
      rolling(roll);
    }

    if (nextProps.roulette.isRoll) {
      console.log('Here!');
      this.disableBets();
    }

    if (nextProps.roulette.round.id !== this.props.roulette.round.id) {
      this.enableBets();
    }

    if (nextProps.roulette.round.winTypes && !nextProps.roulette.isRoll && nextProps.roulette.isRoll !== this.props.roulette.isRoll) {
      this.setWinners();
    }

    if (!nextProps.roulette.isRoll && (roll || roll === 0)) {
      this.setState({ text: `Roll is ${roll}` });
    }

    if (this.props.roulette.round.startTime && !nextProps.roulette.isRoll && !roll) {
      this.setState({
        startTime: startTime,
        timerEnable: true
      });
    }
  }

  componentWillUnmount() {
    this.setState({
      timerEnable: false
    });

    socket.emit('disconnect');
  }

  render() {
    const { done, isRoll, historyRolls } = this.props.roulette;
    const { roll, ownBets, totalBets } = this.props.roulette.round;
    const { disabled, bet, timeToEnd, timerEnable, text } = this.state;
    const { balance } = this.props.user;

    return (
      <Row>
        <Col xs={12}>
          <Col xs={12} className="roulette wrapper">
            {!done ?
              <Col xs={12}>Loading...</Col>
              :
              <ProgressBar
                timeToEnd={timeToEnd}
                text={text}
                timerEnable={timerEnable}
                progressTimer={this.progressTimer}
              />
            }
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
            <BetBlocks
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

const mapStateToProps = ({ roulette, user }) => ({ roulette, user });

const mapDispatchToProps = (dispatch) => ({
  rouletteActions: bindActionCreators(rouletteActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Roulette);
