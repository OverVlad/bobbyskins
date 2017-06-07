import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import { Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as authActions from '../actions/authActions';

import UserLogin from '../components/Header/UserLogin.jsx';
import SteamAuth from '../components/Header/SteamAuth.jsx';
import GameLink from '../components/GameLink.jsx';
import RolImg from '../../public/img/rol.png';

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
            <UserLogin user={user} isAuthenticated={this.auth} />
          </Col>

          <Col sm={1} className="lang">

          </Col>
        </Row>

        <Row className="games" center="sm">
          <Col sm={2} className="game">
            <GameLink thumb={RolImg} title="Roulette" route="/" />
          </Col>

          <Col sm={2} className="game">
            <GameLink thumb={RolImg} title="Poker" route="/poker" />
          </Col>

          <Col sm={2} className="game">
            <GameLink thumb={RolImg} title="Game 3" route="/" />
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = ({ user, auth }) => ({ user, auth });

const mapDispatchToProps = (dispatch) => ({
  authActions: bindActionCreators(authActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
