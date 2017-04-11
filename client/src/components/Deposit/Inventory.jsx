import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import Item from './Item.jsx';

const Inventory = () => (
  <Row className="wrapper deposit">
    <h2 className="title">You inventory: 43 items</h2>

    <div className="deposit__filter">
      <div className="deposit__search">
        <i className="fa fa-search deposit-search__icon" aria-hidden="true"></i>
        <input type="text" className="deposit-search field" placeholder="Search" />
      </div>

      <div className="deposit__sorting">
        <label className="deposit-label">Sorting: </label>
        <select name="" className="deposit-sorting field">
          <option value="" className="deposit-option">Price Low to High</option>
          <option value="" className="deposit-option">Price High to Low</option>
        </select>
      </div>
    </div>
    <div className="items">
      <Row>
        <Col sm={4} lg={2}>
          <Item isJunk={true} />
        </Col>

        <Col sm={4} lg={2}>
          <Item />
        </Col>

        <Col sm={4} lg={2}>
          <Item />
        </Col>

        <Col sm={4} lg={2}>
          <Item />
        </Col>
      </Row>
    </div>
  </Row>
);

export default Inventory;
