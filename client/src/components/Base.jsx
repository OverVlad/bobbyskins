import React from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';
import { Grid, Row, Col } from 'react-flexbox-grid';

import Header from '../containers/Header.js'
import Footer from './Footer.jsx'

const Base = ({ children }) => (
  <Row>
    <Col xs={12}>
      <Header />
    </Col>

    <Grid fluid>
      <Row>
        <Col xs={12}>
          {children}
        </Col>
      </Row>
    </Grid>

    <Col xs={12}>
      <Footer />
    </Col>
  </Row>
);

Base.propTypes = {
  children: PropTypes.object.isRequired
};

export default Base;
