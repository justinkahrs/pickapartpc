// @flow
import * as React from 'react';
import { Col, Container } from 'reactstrap';
import CaseSelect from '../components/caseSelect';
import './build.css';

const Build = () => (
  <Container>
    <h1 className="build__header">Build</h1>
    <Col lg="12" className="build">
      <CaseSelect />
      <CaseSelect />
    </Col>
  </Container>
);
export default Build;
