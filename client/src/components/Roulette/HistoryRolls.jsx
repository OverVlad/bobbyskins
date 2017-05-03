import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';

class HistoryRolls extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const listItems =  this.props.historyRolls.map((roll, index) =>
      <Col sm={1} key={index}> <div className={roll>0 ? roll>7 ? 'black roll' : 'red roll' : 'green roll'} >{roll}</div></Col>
    );

    return (
      <Row className="hostory-rolls" center="xs">
        {listItems}
      </Row>
    );
  }
}

export default HistoryRolls;
