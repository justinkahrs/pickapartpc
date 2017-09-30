// @flow
import * as React from 'react';
import { Button, Col, Container } from 'reactstrap';
import CaseSelect from '../components/case';
import CpuSelect from '../components/cpu';
import Multitasking from '../components/multitasking';
import './build.css';

const Build = () => (
  <Container>
    <h1 className="build__header">Build</h1>
    <Col lg="12" className="build">
      <CaseSelect />
      <CpuSelect />
      <Multitasking />
      <Button style={{ float: 'right' }} onClick={() => alert('You just bought that shit.')}>
        Buy now
      </Button>
    </Col>
  </Container>
);
export default Build;
