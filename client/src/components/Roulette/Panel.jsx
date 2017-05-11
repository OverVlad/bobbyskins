import React from 'react';
import PropTypes from 'prop-types';

const Panel = ({ type, text, totalBets, addBet, disabled, ownBets, totalBets }) => (
  <Col xs={4} lg={2} className="betBlock wrapper">
    <button className="btn-block btn-1-7" data-bet={type} disabled={disabled} onClick={addBet}>{text}</button>
    <div className="own-bet field">{ownBets[type]}<i className="fa fa-diamond" aria-hidden="true"></i></div>
    <div className="total">
      <div className="total-people"><i className="fa fa-bets" aria-hidden="true"></i>{totalBets[type].people}</div>
      <div className="total-bets">{totalBets[type].count}<i className="fa fa-diamond" aria-hidden="true"></i></div>
    </div>
    <div className="list-bets">
      {totalBets[type].bets.map((bet) =>
        <div className="list-bets" key={bet.bet.id}>
          <div className="list-bets__info">
            <img className="list-bets__avatar" src={bet.imgUrl} alt=""/>
            <b className="list-bets__name">{bet.name}</b>
          </div>
          <div className="list-bets__sum">{bet.bet.count}</div>
        </div>
      )}
    </div>
  </Col>
);

export default Panel;
