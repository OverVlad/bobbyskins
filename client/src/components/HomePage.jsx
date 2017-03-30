import React from 'react';
import Chat from './Chat/'
import Roulette from './Roulette/'
import Layout from 'material-ui/Layout';


const HomePage = () => (
  <Layout container gutter={16}>
    <Layout item xs={3}>
        <Chat />
    </Layout>
    <Layout item xs={9}>
        <Roulette />
    </Layout>
  </Layout>
);

export default HomePage;
