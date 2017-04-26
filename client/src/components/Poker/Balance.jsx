import React from 'react'
import formatNumber from '../../utils/formatNumber'
import separateThousands from '../../utils/separateThousands'

export default ({ betAmount, handleClick, ...props }) => (
  <div className="balance">
    <span className="balance-text">Баланс: {separateThousands(props.balance)}</span>
    <input
      className="btn btn-bet btn-blue input-bet"
      value={separateThousands(betAmount) || ''}
      placeholder="Bet amount"
      onChange={(e) => { props.handleChange(formatNumber(e.target.value)) }}
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

