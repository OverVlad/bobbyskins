import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { Link } from 'react-router';
import SteamImg from '../../public/img/steam.png';
import VkImg from '../../public/img/vk.png';
import TwitterImg from '../../public/img/twitter.png';
import FacebookImg from '../../public/img/facebook.png';

const Footer = () => (
  <Row center="xs" className="footer">
    <Col sm={2}>
      <Link className="footer-social"><img src={SteamImg} alt="" className="footer-icon" /></Link>
      <Link className="footer-social"><img src={VkImg} alt=""/></Link>
      <Link className="footer-social"><img src={TwitterImg} alt=""/></Link>
      <Link className="footer-social"><img src={FacebookImg} alt=""/></Link>
    </Col>
    <Col sm={3}>
      <p className="copyright">2017 Copyright ©. All rights reserved</p>
    </Col>
    <Col sm={2} className="menu">
      <ul className="menu__container">
        <li className="menu__i"><Link to="/" className="menu__link">Terms</Link></li>
        <li className="menu__i"><Link to="/support" className="menu__link">Support</Link></li>
        <li className="menu__i"><Link to="/conacts" className="menu__link">Contacts</Link></li>
      </ul>
    </Col>
    <Col sm={2}>

    </Col>
  </Row>
);

export default Footer;
