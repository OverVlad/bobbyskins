import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';


const BetBlock = ({ addBet, totalBets, ownBets, disabled }) => (
  <Row className="Bets" center="xs">
    <Col xs={4} lg={2} className="betBlock wrapper">
      <div className="panel-heading">
        <button className="btn-block btn-odd" data-bet="odd" disabled={disabled['even'] || disabled['odd']} onClick={addBet}>Odd, win 2x</button>
        <div className="own-bet field">{ownBets['odd']}<i className="fa fa-diamond" aria-hidden="true"></i></div>
        <div className="bet-panel">
          <div className="total-people"><i className="fa fa-bets" aria-hidden="true"></i>{totalBets['odd'].people}</div>
          <div className="total-bets">{totalBets['odd'].count}<i className="fa fa-diamond" aria-hidden="true"></i></div>
          <div className="list-bets">
            {totalBets['odd'].bets.map((bet) =>
              <div className="list-bets" key={bet.id}>
                <div className="list-bets__info">
                  <img className="list-bets__avatar" src={bet.avatar} alt=""/>
                  <b className="list-bets__name">{bet.betname}</b>
                </div>
                <div className="list-bets__sum">{bet.bet.count}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Col>

    <Col xs={4} lg={2} className="betBlock wrapper">
      <button className="btn-block btn-1-7" data-bet="1-7" disabled={disabled['1-7'] || disabled['8-14']} onClick={addBet}>1 to 7, win 2x</button>
      <div className="own-bet field">{ownBets['1-7']}<i className="fa fa-diamond" aria-hidden="true"></i></div>
      <div className="total">
        <div className="total-people"><i className="fa fa-bets" aria-hidden="true"></i>{totalBets['1-7'].people}</div>
        <div className="total-bets">{totalBets['1-7'].count}<i className="fa fa-diamond" aria-hidden="true"></i></div>
      </div>
      <div className="list-bets">
        {totalBets['1-7'].bets.map((bet) =>
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

    <Col xs={4} lg={2} className="betBlock wrapper">
      <button className="btn-block btn-zero" data-bet="0" disabled={disabled['0']} onClick={addBet}>0, win 14x</button>
      <div className="own-bet field">{ownBets['0']}<i className="fa fa-diamond" aria-hidden="true"></i></div>

      <div className="total-people"><i className="fa fa-bets" aria-hidden="true"></i>{totalBets['0'].people}</div>
      <div className="total-bets">{totalBets['0'].count}<i className="fa fa-diamond" aria-hidden="true"></i></div>

        <div className="list-bets">
          {totalBets['0'].bets.map((bet) =>
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

    <Col xs={4} lg={2} className="betBlock wrapper">
      <button className="btn-block btn-8-14" data-bet="8-14" disabled={disabled['1-7'] || disabled['8-14']} onClick={addBet}>8 to 14, win 2x</button>
      <div className="own-bet field">{ownBets['8-14']}<i className="fa fa-diamond" aria-hidden="true"></i></div>

      <div className="total-people"><i className="fa fa-bets" aria-hidden="true"></i>{totalBets['8-14'].people}</div>
      <div className="total-bets">{totalBets['even'].count}<i className="fa fa-diamond" aria-hidden="true"></i></div>

        <div className="list-bets">
          {totalBets['8-14'].bets.map((bet) =>
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

    <Col xs={4} lg={2} className="betBlock wrapper">
      <button className="btn-block btn-even" data-bet="even" disabled={disabled['even'] || disabled['odd']} onClick={addBet}>Even, win 2x</button>
      <div className="own-bet field">{ownBets['even']}<i className="fa fa-diamond" aria-hidden="true"></i></div>
      <div className="total-people"><i className="fa fa-bets" aria-hidden="true"></i>{totalBets['even'].people}</div>
      <div className="total-bets">{totalBets['even'].count}<i className="fa fa-diamond" aria-hidden="true"></i></div>

        <div className="list-bets">
          {totalBets['even'].bets.map((bet) =>
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
  </Row>
);

BetBlock.propTypes = {
  addBet: PropTypes.func.isRequired,
  totalBets: PropTypes.object.isRequired,
  ownBets: PropTypes.object.isRequired
};

export default BetBlock;
