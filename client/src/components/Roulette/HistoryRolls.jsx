import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';

class HistoryRolls extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const listItems =  this.props.historyRolls.map((roll, index) =>
      <Col sm={1} key={index}> <div className={roll >= 1 && roll < 8 ? 'red roll' : (roll >= 8 && roll <= 14) ? 'black roll' : 'green roll'} >{roll}</div></Col>
    );

    return (
      <Row className="hostory-rolls" center="xs">
        {listItems}
      </Row>
    );
  }
}

export default HistoryRolls;
