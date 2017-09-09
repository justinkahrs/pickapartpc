import React, { Component } from 'react';
import {
  Container,
} from 'reactstrap';
import CaseSelect from '../components/caseSelect';
import CpuSelect from '../components/cpuSelect';
import RamSelect from '../components/ramSelect';

export default class Build extends Component {
  render() {
    return (
      <Container>
        <h1>Build</h1>
        <CaseSelect />
        <CpuSelect />
        <RamSelect />
      </Container>
    );
  }
}
