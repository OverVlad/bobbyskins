import React, { PropTypes } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

const BetBlock = ({ bet, addBet, total }) => (
  <Row className="Bets" center="xs">
    <Col xs={4} lg={2} className="betBlock">
      <div className="panel-heading">
        <button className="btn-block btn-odd" data-bet="odd" onClick={addBet}>Odd, win 2x</button>
        <div className="own-bet">{bet.type === 'odd' ? bet.count : 0}</div>
        <div className="bet-panel">
          <div className="total-people"><i className="fa fa-users" aria-hidden="true"></i>0</div>
          <div className="total-bets">0</div>

          <div className="list-bets">

          </div>
        </div>
      </div>
    </Col>

    <Col xs={4} lg={2} className="betBlock">
      <button className="btn-block btn-1-7" data-bet="1-7" onClick={addBet}>1 to 7, win 2x</button>
      <div className="own-bet">{bet.type === '1-7' ? bet.count : 0}</div>
      <div className="total">
        <div className="total-people"><i className="fa fa-users" aria-hidden="true"></i>0</div>
        <div className="total-bets">0</div>
      </div>
      <div className="list-bets"></div>
    </Col>

    <Col xs={4} lg={2} className="betBlock">
      <button className="btn-block btn-zero" data-bet="0" onClick={addBet}>0, win 14x</button>
      <div className="own-bet">{bet.type === '0' ? bet.count : 0}</div>

      <div className="total-people"><i className="fa fa-users" aria-hidden="true"></i>0</div>
      <div className="total-bets">0</div>

      <div className="list-bets">

      </div>
    </Col>

    <Col xs={4} lg={2} className="betBlock">
      <button className="btn-block btn-8-14" data-bet="8-14" onClick={addBet}>8 to 14, win 2x</button>
      <div className="own-bet">{bet.type === '8-14' ? bet.count : 0}</div>

      <div className="total-people"><i className="fa fa-users" aria-hidden="true"></i>0</div>
      <div className="total-bets">0</div>

      <div className="list-bets" id="list-bets">

      </div>
    </Col>

    <Col xs={4} lg={2} className="betBlock">
      <button className="btn-block btn-even" data-bet="even" onClick={addBet}>Even, win 2x</button>
      <div className="own-bet">{bet.type === 'even' ? bet.count : 0}</div>
      <div className="total-people"><i className="fa fa-users" aria-hidden="true"></i>0</div>
      <div className="total-bets">0</div>

      <div className="list-bets">

      </div>
    </Col>
  </Row>
);

BetBlock.propTypes = {

}

export default BetBlock;
