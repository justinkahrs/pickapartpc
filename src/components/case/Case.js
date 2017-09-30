import React from 'react';
import times from 'lodash/times';
import { Col } from 'reactstrap';
import Item from '../common/itemSelect/Item';

const Case = ({ onClick, name, slits }) => (
  <Col style={{ textAlign: 'center' }} xs="4">
    <Item onClick={onClick}>
      {name}
      {times(slits).map(x => <hr key={x} />)}
    </Item>
  </Col>
);
export default Case;
