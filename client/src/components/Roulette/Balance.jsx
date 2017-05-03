import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';

const Balance = ({ balance, bet, handleClick, handleChange }) => (
  <div className="balance">
    <span className="balance-text">Баланс: <NumberFormat value={balance} thousandSeparator={' '} displayType={'text'} onChange={handleChange} /></span>
    <NumberFormat
      value={ bet ? bet : null}
      thousandSeparator={' '}
      className="btn btn-bet btn-blue input-bet"
      placeholder="Bet amount"
      />

    <button className="btn btn-bet btn-red" data-action="reset" onClick={handleClick}>Reset</button>
    <button className="btn btn-bet btn-blue" data-action="10" onClick={handleClick}>+10</button>
    <button className="btn btn-bet btn-blue" data-action="100" onClick={handleClick}>+100</button>
    <button className="btn btn-bet btn-blue" data-action="1000" onClick={handleClick}>+1000</button>
    <button className="btn btn-bet btn-blue" data-action="half" onClick={handleClick}>1/2</button>
    <button className="btn btn-bet btn-red" data-action="double" onClick={handleClick}>x2</button>
    <button className="btn btn-bet btn-red" data-action="max" onClick={handleClick}>Max</button>
  </div>
);

Balance.propTypes = {
  bet: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
}

export default Balance;
