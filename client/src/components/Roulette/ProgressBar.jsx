import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProgressBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: `Prepare to start`,
      startTime: this.props.startTime
    }
  }

  progressBar() {
    if(this.state.startTime  > 0.00) {
      setTimeout(() => {
        this.setState({
          startTime: (this.state.startTime - 0.02).toFixed(2),
          text: `End of raund after ${this.state.startTime}`
        });
        this.progressBar(this.state.startTime);
      }, 18);
    } else {
      this.setState({ text: 'Roll!' });
    }
  }

  componentDidMount() {
    if(this.state.startTime) {
      this.state.startTime.toFixed(2);
      this.progressBar();
    }
    else {
      this.setState({ text: 'Roll was started' });
    }
  }

  componentWillReceiveProps(nextProps) {
    if(!nextProps.isRoll && nextProps.roll) {
        this.setState({ text: `Roll is ${nextProps.roll}` });
    }
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
