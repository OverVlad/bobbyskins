import React from 'react';
import Chat from '../containers/Chat'
import Roulette from '../containers/Roulette'
import { Grid, Row, Col } from 'react-flexbox-grid';


const HomePage = () => (
  <Row>
    <Col xs={12} sm={3}>
      <Chat />
    </Col>
    <Col xs={12} sm={9}>
      <Roulette />
    </Col>
  </Row>
);

export default HomePage;
