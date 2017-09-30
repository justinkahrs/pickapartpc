// @flow
import * as React from 'react';
import { Col, Container } from 'reactstrap';
import CaseSelect from '../components/case';
import CpuSelect from '../components/cpu';
import RamSelect from '../components/ram';
import './build.css';

const Build = () => (
  <Container>
    <h1 className="build__header">Build</h1>
    <Col lg="12" className="build">
      <CaseSelect />
      <CpuSelect />
      <RamSelect />
    </Col>
  </Container>
);
export default Build;
