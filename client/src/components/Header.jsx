import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import Layout from 'material-ui/Layout';

const Header = () => (
  <Layout container className="top-bar">
    <Layout container  justify="center" className="header">
      <Layout item sm={2} className="logo">
        <IndexLink to="/">BobbySkins</IndexLink>
      </Layout>

      <Layout item sm={5} className="menu">
        <ul className="menu__container">
          <li className="menu__i"><IndexLink to="/" className="menu__link">Home</IndexLink></li>
          <li className="menu__i"><Link to="/deposit" className="menu__link">Deposit</Link></li>
          <li className="menu__i"><Link to="/withdraw" className="menu__link">Withdraw</Link></li>
          <li className="menu__i"><Link to="/rules" className="menu__link">Rules</Link></li>
          <li className="menu__i"><Link to="/support" className="menu__link">Support</Link></li>
        </ul>
      </Layout>

      <Layout item sm={2} className="profile">
        <img src="https://www.smashingmagazine.com/wp-content/uploads/2015/06/10-dithering-opt.jpg" alt="Profile" className="profile-avatar" />

        <a href="#" className="profile__name">Skybend</a>
      </Layout>

      <Layout item sm={1} className="lang">
        <img src="img/rus.png" alt="lang" className="lang-img" />
        <a href="#" className="lang-name">ENG</a>
      </Layout>
    </Layout>

    <Layout container  justify="center" className="games">
      <Layout item sm={1} className="game">
        <img src="img/rol.png" alt="" className="game-img" />
        <a href="#" className="game-name">Roulette</a>
      </Layout>
      <Layout item sm={1} className="game">
        <a href="#" className="game-name">Game2</a>
      </Layout>
      <Layout item sm={1} className="game">
        <a href="#" className="game-name">Game3</a>
      </Layout>
    </Layout>
  </Layout>
);

export default Header;
