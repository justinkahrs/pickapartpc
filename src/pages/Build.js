// @flow
import * as React from 'react';
import { Button } from 'reactstrap';
import CaseSelect from '../components/case';
import CpuSelect from '../components/cpu';
import Multitasking from '../components/multitasking';
import PageContainer from '../components/common/pageContainer';
import './build.css';

const Build = () => (
  <PageContainer title="Build" header>
    <CaseSelect />
    <CpuSelect />
    <Multitasking />
    <Button style={{ float: 'right' }} onClick={() => alert('You just bought that shit.')}>
      Buy now
    </Button>
  </PageContainer>
);
export default Build;
