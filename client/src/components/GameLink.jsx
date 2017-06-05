import React from 'react';
import { Link } from 'react-router';

const GameLink = ({thumb, title, route}) => (
  <div>
    <img src={thumb} alt={title} className="game-img" />
    <Link to={route} className="game-name">{title}</Link>
  </div>
);

export default GameLink;
