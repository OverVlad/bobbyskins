import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import Inventory from './Deposit/Inventory.jsx'
import Deposit from './Deposit/Deposit.jsx'


const DepositPage = () => (
  <Grid>
    <Row center="xs">
      <Col xs={12} sm={7}>
        <Inventory />
      </Col>

      <Col xs={12} sm={5}>
        <Deposit />
      </Col>
    </Row>
  </Grid>
);

export default DepositPage;
