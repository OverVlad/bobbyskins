import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Timer from './Timer.jsx';

class ProgressBar extends Component {
  shouldComponentUpdate({timerEnable, text, timeToEnd}) {
    return (
      this.props.timerEnable !== timerEnable ||
      this.props.text !== text ||
      this.props.timeToEnd !== timeToEnd
    );
  }

  render() {
    const { timerEnable, text, timeToEnd } = this.props;

    return (
      <div className="progress">
        <div className="banner">{text}</div>
        <div id="progress-bar"><div className="bar" style={{ width: `${timeToEnd * 100 / 20}%` }}></div></div>
        <Timer timeout={10} enabled={timerEnable} callback={() => this.props.progressTimer()} />
      </div>
    );
  }
}

export default ProgressBar;
