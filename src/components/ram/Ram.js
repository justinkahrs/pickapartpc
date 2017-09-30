import React from 'react';
import { Col } from 'reactstrap';
import Item from '../common/itemSelect/Item';

const Cpu = ({ onClick, name }) => (
  <Col style={{ textAlign: 'center' }} xs="4">
    <Item onClick={onClick}>{name}</Item>
  </Col>
);
export default Cpu;
