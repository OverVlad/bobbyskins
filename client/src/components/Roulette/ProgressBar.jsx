import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Timer from './Timer.jsx';

class ProgressBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: `Prepare to start`,
      startTime: this.props.startTime.toFixed(2),
      timerEnable: false
    }
  }

  progressTimer() {
    const { startTime } = this.state;

    if(startTime  > 0.00) {
      this.setState({
        text: `End of raund after ${startTime}`,
        startTime: (startTime - 0.01).toFixed(2)
      });
    } else {
      this.setState({
        text: 'Roll!' ,
        timerEnable: false
      });
    }
  }

  componentDidMount() {
    if(this.props.startTime) {
      this.setState({
        timerEnable: true
      });
    }
  }

  componentWillUnmount() {
    this.setState({
      timerEnable: false
    });
  }

  componentWillReceiveProps(nextProps) {
    if( (!nextProps.isRoll && nextProps.roll) || nextProps.roll === 0 ) {
      this.setState({ text: `Roll is ${nextProps.roll}` });
    }

    if(nextProps.startTime && nextProps.roll === '' && !nextProps.isRoll) {
      this.setState({
        text: `End of raund after ${nextProps.startTime}`,
        startTime: nextProps.startTime.toFixed(2),
        timerEnable: true
      });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(this.state.startTime !== nextState.startTime) {
      return true;
    }

    if(this.state.text !== nextState.text) {
      return true;
    }

    if(this.state.timerEnable !== nextState.timerEnable) {
      return true;
    }

    return false;
  }

  render() {
    const { timerEnable, text, startTime } = this.state;

    return (
      <div className="progress">
        <div className="banner">{text}</div>
        <div id="progress-bar"><div className="bar" ref={(progress) => this.progress = progress} style={{ width: `${startTime * 100 / 20}%` }}></div></div>
        <Timer timeout={10} enabled={timerEnable} callback={() => this.progressTimer()} />
      </div>
    );
  }
}

export default ProgressBar;
