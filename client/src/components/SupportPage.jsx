import React, { Component } from 'react';
import { Grid, Row } from 'react-flexbox-grid';
import SupportList from './Support/SupportList.jsx';

const SupportPage = ({ faqBoxes, onFaqBoxClick }) => (
  <Grid>
    <SupportList faqBoxes={faqBoxes} onFaqBoxClick={onFaqBoxClick} />
  </Grid>
);

export default SupportPage;
