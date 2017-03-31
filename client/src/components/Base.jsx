import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import Layout from 'material-ui/Layout';

import Header from './Header.jsx'

const Base = ({ children }) => (
  <Layout container gutter={16}>
    <Layout item xs={12}>
      <Header />
    </Layout>

    <Layout item xs={12}>
      {children}
    </Layout>
  </Layout>
);

Base.propTypes = {
  children: PropTypes.object.isRequired
};

export default Base;
