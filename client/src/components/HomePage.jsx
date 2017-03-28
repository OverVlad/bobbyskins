import React from 'react';
import Chat from './Chat'
import Roulette from './Roulette'


const HomePage = () => (
  <div className="row">
    <div className="col-md-3">
      <Chat />
    </div>
    <div className="col-md-9">
      <Roulette />
    </div>
  </div>
);

export default HomePage;
