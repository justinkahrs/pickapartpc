import React from 'react';
import * as _ from 'lodash';
import { Col } from 'reactstrap';
import Item from '../common/itemSelect/Item';

const Case = ({ onClick, name, slits }) => (
  <Col sm="4">
    <Item style={{ display: 'flex' }} onClick={onClick}>
      <div style={{ textAlign: 'center' }}>{name}</div>
      {_.times(slits).map(x => <hr key={x} />)}
    </Item>
  </Col>
);
export default Case;
