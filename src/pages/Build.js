// @flow
import * as React from 'react';
import CaseSelect from '../components/caseSelect';
import { Col, Container } from 'reactstrap';
import './build.css';

const Build = () => (
  <Container>
    <h1>Build</h1>
    <Col lg="12" className="build">
      <CaseSelect />
    </Col>
  </Container>
);
export default Build;
