import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import Layout from 'material-ui/Layout';

const Base = ({ children }) => (
  <Layout container gutter={8}>
    <Layout item xs={12}>
      <header>
        <IndexLink to="/">BobbySkins</IndexLink>
      </header>
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
