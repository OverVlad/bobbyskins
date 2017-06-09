import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';

class Rules extends Component {
  render() {
    const { user, url } = this.props;

    return (
      <Row center="xs" className="rules">
        <Col xs={12} sm={12}>
          <div className="wrapper">
            Content for Rules
          </div>
        </Col>
      </Row>
    );
  }
}

export default Rules;
