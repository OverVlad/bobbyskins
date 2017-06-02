import React from 'react';
import Chat from '../containers/Chat'
import Poker from '../containers/Poker'
import { Grid, Row, Col } from 'react-flexbox-grid';

const PokerPage = () => (
  <Grid>
    <Row>
      <Col xs={12} sm={12} md={3}>
        <Chat />
      </Col>
      <Col xs={12} sm={12} md={9} >
        <Poker />
      </Col>
    </Row>
  </Grid>
);

export default PokerPage
