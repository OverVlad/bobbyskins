import React from 'react';
import PropTypes from 'prop-types';

const Wheel = () => (
  <div className="wheel">
    <div className="wheel__img">
      <img src="img/roulette.png" alt="" className="wheel-img" id="wheel" />
    </div>
    <div className="poiner">
      <img src="img/pointer.png" alt="pointer" className="poiner-img" />
    </div>
  </div>
);

export default Wheel;
