import React, { Component } from 'react';
import { Grid, Row } from 'react-flexbox-grid';
import Profile from '../containers/Profile.js';

const ProfilePage = ({ route }) => (
  <Grid>
    <Profile url={route.path}/>
  </Grid>
);

export default ProfilePage;
