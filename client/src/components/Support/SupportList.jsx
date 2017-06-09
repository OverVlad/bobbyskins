import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import FaqBox from './FaqBox.jsx'

const SupportList = ({ faqBoxes, onFaqBoxClick }) => (
  <Row center="xs">
    <Col xs={12} sm={12}>
      <div className="wrapper support">
        {faqBoxes.map(box =>
          <FaqBox
            key={box.id}
            {...box}
            onClick={() => onFaqBoxClick(box.id)}
          />
        )}
      </div>
    </Col>
  </Row>
)

export default SupportList;
