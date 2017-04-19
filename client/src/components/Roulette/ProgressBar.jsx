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

  progressBar() {
    if(this.state.startTime  > 0.00) {
      setTimeout(() => {
        this.setState({
          text: `End of raund after ${this.state.startTime}`,
          startTime: (this.state.startTime - 0.02).toFixed(2)
        });
        this.progressBar();
      }, 18);
    } else {
      this.setState({ text: 'Roll!' });
    }
  }

  componentDidMount() {
    console.log('componentDidMount');
    if(this.props.startTime) {
      this.progressBar();
    }
    else {
      this.setState({ text: 'Roll was started' });
    }
  }

  componentWillReceiveProps(nextProps) {
    if( (!nextProps.isRoll && nextProps.roll) || nextProps.roll === 0 ) {
      this.setState({ text: `Roll is ${nextProps.roll}` });
    }

    if(nextProps.startTime && nextProps.roll === '' && !nextProps.isRoll) {
      console.log('nextProps.startTime: ', nextProps.startTime);
      this.setState({
        text: `End of raund after ${nextProps.startTime}`,
        startTime: nextProps.startTime.toFixed(2)
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.startTime == 20.00)
      this.progressBar();
  }

  render() {

    return (
      <div className="progress">
        <div className="banner">{this.state.text}</div>
        <div id="progress-bar"><div className="bar" ref={(progress) => this.progress = progress} style={{ width: `${this.state.startTime * 100 / 20}%` }}></div></div>
      </div>
    );
  }
}

export default ProgressBar;
