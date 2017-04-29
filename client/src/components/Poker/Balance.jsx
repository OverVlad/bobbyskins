import React from 'react'
import formatNumber from '../../utils/formatNumber'
import separateThousands from '../../utils/separateThousands'

export default props => (
  <div className="balance">
    <span className="balance-text">Баланс: {separateThousands(props.balance)}</span>
    <input
      disabled={props.disabled}
      className="btn btn-bet btn-blue input-bet"
      value={separateThousands(formatNumber(props.betAmount)) || ''}
      placeholder="Bet amount"
      onChange={(e) => { props.handleChange(formatNumber(e.target.value)) }}
    />

    <button
      disabled={props.disabled}
      className="btn btn-bet btn-red"
      data-action="reset"
      onClick={props.handleBetClick}
    >
      Reset
    </button>
    <button
      disabled={props.disabled}
      className="btn btn-bet btn-blue"
      data-action="10"
      onClick={props.handleBetClick}
    >
      +10
    </button>
    <button
      disabled={props.disabled}
      className="btn btn-bet btn-blue"
      data-action="100"
      onClick={props.handleBetClick}
    >
      +100
    </button>
    <button
      disabled={props.disabled}
      className="btn btn-bet btn-blue"
      data-action="1000"
      onClick={props.handleBetClick}
    >
      +1000
    </button>
    <button
      disabled={props.disabled}
      className="btn btn-bet btn-blue"
      data-action="half"
      onClick={props.handleBetClick}
    >
      1/2
    </button>
    <button
      disabled={props.disabled}
      className="btn btn-bet btn-red"
      data-action="double"
      onClick={props.handleBetClick}
    >
      x2
    </button>
    <button
      disabled={props.disabled}
      className="btn btn-bet btn-red"
      data-action="max"
      onClick={props.handleBetClick}
    >
      Max
    </button>
  </div>
)
