import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProgressBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: `Prepare to start`,
      startTime: this.props.startTime.toFixed(2)
    }
  }

  progressTimer() {
    this.timer = setInterval(() => {
      if(this.state.startTime  > 0.00) {
        this.setState({
          text: `End of raund after ${this.state.startTime}`,
          startTime: (this.state.startTime - 0.01).toFixed(2)
        });
      } else {
        this.setState({ text: 'Roll!' });
        clearInterval(this.timer);
      }
    }, 10);
  }

  componentDidMount() {
    if(this.props.startTime) {
      this.progressTimer();
    }
    else {
      this.setState({ text: 'Roll was started' });
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    clearInterval(this.timer);
  }

  componentWillReceiveProps(nextProps) {
    if( (!nextProps.isRoll && nextProps.roll) || nextProps.roll === 0 ) {
      this.setState({ text: `Roll is ${nextProps.roll}` });
    }

    if(nextProps.startTime && nextProps.roll === '' && !nextProps.isRoll) {
      this.setState({
        text: `End of raund after ${nextProps.startTime}`,
        startTime: nextProps.startTime.toFixed(2)
      });
      this.progressTimer();
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(this.state.startTime !== nextState.startTime) {
      return true;
    }

    if(this.state.text !== nextState.text) {
      return true;
    }

    return false;
  }

  render() {
    console.log('render! Progress bar');

    return (
      <div className="progress">
        <div className="banner">{this.state.text}</div>
        <div id="progress-bar"><div className="bar" ref={(progress) => this.progress = progress} style={{ width: `${this.state.startTime * 100 / 20}%` }}></div></div>
      </div>
    );
  }
}

export default ProgressBar;
