import React from 'react';
import Chat from '../containers/Chat/'
import Poker from '../containers/Poker/'
import { Grid, Row, Col } from 'react-flexbox-grid';


export default () => (
  <Row>
    <Col xs={12} sm={3}>
      <Chat />
    </Col>
    <Col xs={12} sm={9}>
      <Poker />
    </Col>
  </Row>
);
