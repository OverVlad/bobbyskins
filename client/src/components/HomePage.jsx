import React from 'react';
import Chat from '../containers/Chat/'
import Roulette from '../containers/Roulette/'
import Layout from 'material-ui/Layout';


const HomePage = () => (
  <Layout container>
    <Layout item xs={12} sm={3}>
      <Chat />
    </Layout>
    <Layout item xs={12} sm={9}>
      <Roulette />
    </Layout>
  </Layout>
);

export default HomePage;
