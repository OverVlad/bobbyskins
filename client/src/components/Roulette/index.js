import React, { Component } from 'react';
import Layout from 'material-ui/Layout';

class Roulette extends Component {

  componentWillMount() {
    function progress(timeleft, timetotal) {
      const $element = $('.progress-bar');
      var progressBarWidth = timeleft * $element.width() / timetotal;
      $element.find('div').animate({ width: progressBarWidth }, 1000);
      $('.timer').html( Math.floor(timeleft / 60) + ":"+ timeleft % 60 );
      if(timeleft > 0) {
        setTimeout(function() {
          progress(timeleft - 1, timetotal, $element);
        }, 500);
      }
    };

    progress(80, 100);
  }

  render() {
    return (
      <Layout container className="roulette">
        <Layout item xs={11}>
          <div className="progress-bar">
            <div className="progress">До окончания хода осталось <span className="timer">0</span></div>
            <div className="bar">
            </div>
          </div>
        </Layout>
      </Layout>
    );
  }
}

export default Roulette;
