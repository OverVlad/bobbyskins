import React, { PropTypes, Component } from 'react';
import { roll } from '../../utils/roll';

class ProgressBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timeTotal: 20.00,
      timeLeft: 20.00,
      text: `Prepare to start`
    }
  }

  startProgressBar() {
    this.progressBar();
  }

  progressBar() {
    if(this.state.timeLeft > 0.00) {
      const timer = setTimeout(() => {
        this.decreaseTime();
        this.progressBar(this.state.timeLeft);
      }, 10);
    } else {
      this.setState({ text: 'Rolling!' });
      roll();
    }
  }

  componentDidMount() {
    this.startProgressBar();
  }

  decreaseTime() {
    this.setState({
      timeLeft: (this.state.timeLeft - 0.01).toFixed(2),
      text: `End of raund after ${this.state.timeLeft}`
     });
  }

  render() {
    return (
      <div className="progress">
        <div className="banner">{this.state.text}</div>
        <div id="progress-bar"><div className="bar" style={{ width: `${this.state.timeLeft * 100 / this.state.timeTotal}%` }}></div></div>
      </div>
    );
  }
}

export default ProgressBar;
