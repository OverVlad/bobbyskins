import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';
import NumberFormat from 'react-number-format';

const Item = ({ isJunk }) => (
  <Row className="item-wrapper">
    <div className={isJunk ? "item junk" : "item" }>
      <span className="item__name">FAMAS | Mecha Industries (Factory New)</span>
      <img src="https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopamie19f0Ob3Yi5FvISJkJKKkPj6NbLDk1RC68phj9bN_Iv9nGu4qgE7Nnf3LISddw5taAzQ8lm6xOq9gZTpuZ6fyXA3syIltHffnxbkhxEYOLZtm7XAHgXm-xFt/360fx360f" alt="" className="item__img"/>

      {isJunk ?
        <div className="junk__text">Junk</div>
        :
        <div className="item__price">
          <NumberFormat
            className="item-price"
            value="10000"
            thousandSeparator={' '}
            displayType={'text'}
            />
          <i className="fa fa-diamond" aria-hidden="true"></i>
        </div>
      }
    </div>
  </Row>
);

Item.propTypes = {
  isJunk: PropTypes.bool
}

export default Item;
