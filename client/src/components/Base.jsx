import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';


const Base = ({ children }) => (
  <div>
    <div className="top-bar">
      <div className="top-bar-left">
        <IndexLink to="/">BobbySkins</IndexLink>
      </div>

    </div>

    {children}

  </div>
);

Base.propTypes = {
  children: PropTypes.object.isRequired
};

export default Base;
