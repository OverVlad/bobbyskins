import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import { Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as authActions from '../actions/authActions'

import Profile from '../components/Header/Profile.jsx'
import SteamAuth from '../components/Header/SteamAuth.jsx'

import socket from '../utils/socket';

class Header extends Component {
  constructor(props) {
    super(props);

    this.auth = this.props.auth.isAuthenticated
  }

  render() {
    const { user } = this.props;

    return (
      <div>
        <Row className="header">
          <Col xsOffset={1} sm={2} className="logo">
            <IndexLink to="/">BobbySkins</IndexLink>
          </Col>

          <Col sm={5} className="menu">
            <ul className="menu__container">
              <li className="menu__i"><IndexLink to="/" className="menu__link">Home</IndexLink></li>
              <li className="menu__i"><Link to="/deposit" className="menu__link">Deposit</Link></li>
              <li className="menu__i"><Link to="/withdraw" className="menu__link">Withdraw</Link></li>
              <li className="menu__i"><Link to="/rules" className="menu__link">Rules</Link></li>
              <li className="menu__i"><Link to="/support" className="menu__link">Support</Link></li>
            </ul>
          </Col>

          <Col sm={1} className="profile">

          </Col>

          <Col sm={1} className="lang">
            {this.auth ? <Profile user={user} /> : <SteamAuth />}
          </Col>
        </Row>

        <Row className="games" center="sm">
          <Col sm={2} className="game">
            <img src="img/rol.png" alt="" className="game-img" />
            <a href="#" className="game-name">Roulette</a>
          </Col>
          <Col sm={2} className="game">
            <a href="#" className="game-name">Game2</a>
          </Col>
          <Col sm={2} className="game">
            <a href="#" className="game-name">Game3</a>
          </Col>
        </Row>
      </div>
    ) ;
  }
}

const mapStateToProps = ({ user, auth }) => ({ user, auth });

const mapDispatchToProps = (dispatch) => ({
    authActions: bindActionCreators(authActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
