import React from 'react'
import formatNumber from '../../utils/formatNumber'
import separateThousands from '../../utils/separateThousands'

const Balance = (props) => (
  <div className="balance" style={{ marginLeft: '40px', marginRight: '40px' }}>
    <div className="pokerbets">
      <button
        disabled={props.disabled}
        className="pokerbtn lblue"
        data-action="500"
        onClick={props.handleBetClick}
      >
        500<i className="fa fa-diamond" aria-hidden="true" />
      </button>
      <button
        disabled={props.disabled}
        className="pokerbtn blue"
        data-action="1000"
        onClick={props.handleBetClick}
      >
        1000<i className="fa fa-diamond" aria-hidden="true" />
      </button>
      <button
        disabled={props.disabled}
        className="pokerbtn violet"
        data-action="3000"
        onClick={props.handleBetClick}
      >
        3000<i className="fa fa-diamond" aria-hidden="true" />
      </button>
      <button
        disabled={props.disabled}
        className="pokerbtn green"
        data-action="5000"
        onClick={props.handleBetClick}
      >
        5000<i className="fa fa-diamond" aria-hidden="true" />
      </button>
      <button
        disabled={props.disabled}
        className="pokerbtn pink"
        data-action="10000"
        onClick={props.handleBetClick}
      >
        10000<i className="fa fa-diamond" aria-hidden="true" />
      </button>
    </div>
    <div className="betBalance">
      <span className="balance-text">
        Баланс: {separateThousands(props.balance)}
        <i className="fa fa-diamond" aria-hidden="true" />
      </span>
      <input
        disabled={props.disabled}
        className="btn btn-bet btn-blue input-bet"
        value={separateThousands(formatNumber(props.betAmount)) || ''}
        placeholder="Ставка"
        onChange={props.handleChange}
      />
      <button
        disabled={props.disabled}
        className="btn btn-bet btn-red"
        data-action="reset"
        onClick={props.handleBetClick}
      >
        Очистить
      </button>
    </div>
    <div>
      <button
        disabled={props.disabled}
        className="pokerbtn serve"
        onClick={props.rollCards}
      >
        Раздать
      </button>
    </div>
  </div>
);

export default Balance;
