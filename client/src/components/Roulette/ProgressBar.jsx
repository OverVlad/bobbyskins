import React, { PropTypes } from 'react';


const ProgressBar = () => (
  <div className="progress">
    <div className="banner">End of raund after <span id="timer"></span></div>
    <div id="progress-bar"><div className="bar"></div></div>
  </div>
);

export default ProgressBar;
