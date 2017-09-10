// @flow
import * as React from 'react';
import { Container } from 'reactstrap';
import CaseSelect from '../components/caseSelect';
import CpuSelect from '../components/cpuSelect';
import RamSelect from '../components/ramSelect';

const Build = () => (
  <Container>
    <h1>Build</h1>
    <CaseSelect />
    <CpuSelect />
    <RamSelect />
  </Container>
);
export default Build;
