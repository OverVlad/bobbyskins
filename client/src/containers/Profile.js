import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-flexbox-grid';
import Sidebar from '../components/Profile/Sidebar.jsx';
import ProfileData from '../components/Profile/ProfileData.jsx';

class Profile extends Component {
  render() {
    const { user, url } = this.props;

    return (
      <Row center="xs" className="profile">
        <Col xs={12} sm={3}>
          <Sidebar user={user}/>
        </Col>
        <Col xs={12} sm={9}>
          <ProfileData section={url}/>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = ({ user }) => ({ user });
export default connect(mapStateToProps)(Profile);
