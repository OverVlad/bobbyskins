import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import { Row, Col } from 'react-flexbox-grid';

class Header extends Component {
  constructor(props) {
    super(props);

    console.log(this.props);

    this.auth = this.props.auth.isAuthenticated
  }

  componentDidMount() {
    if(this.auth) {
      socket.connect(this.props.user);
    }
  }

  render() {
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
            <img src="https://www.smashingmagazine.com/wp-content/uploads/2015/06/10-dithering-opt.jpg" alt="Profile" className="profile-avatar" />

            <a href="#" className="profile__name">Skybend</a>
          </Col>

          <Col sm={1} className="lang">
            <img src="img/rus.png" alt="lang" className="lang-img" />
            <a href="#" className="lang-name">ENG</a>
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

export default Header;
