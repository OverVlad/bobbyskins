import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

import Item from './Item.jsx';

const Deposit = () => (
  <Row className="deposit wrapper">
    <h2 className="title">Deposit</h2>

    <div className="total-panel">
      <div className="total-items">Items: 5</div>
      <div className="total-sum">Total: 0<i className="fa fa-diamond" aria-hidden="true"></i></div>
    </div>

    <div className="items">
      <Row>
        <Col sm={6} lg={3}>
          <Item />
        </Col>

        <Col sm={6} lg={3}>
          <Item />
        </Col>
      </Row>
    </div>
  </Row>
);

export default Deposit;
