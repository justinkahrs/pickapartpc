import React, {Component} from 'react';
import {
  Container,
  Row,
  Col,
  Label,
  Input,
  FormGroup,
} from 'reactstrap';
import CaseSelect from '../components/caseSelect';
import CpuSelect from '../components/cpuSelect';

const styles = {
  leftAlign: {
    textAlign: 'left',
  },
  noBottomMargin: {
    marginBottom: '0',
  },
  amdCPU: {
    borderRadius: '10px',
    backgroundColor: 'lightgrey',
    height: '6em',
    width: '6em',
  },
  intelCPU: {
    borderRadius: '10px',
    backgroundColor: 'lightgrey',
    height: '6em',
    width: '6em',
  },
};

export default class Build extends Component {
  render() {
    return (
      <Container>
        <h1>Build</h1>
        <CaseSelect/>

        <br/>

        <CpuSelect/>

        <br/>

        <div style={styles.leftAlign}>
          <Label style={styles.noBottomMargin}>RAM</Label>
          <hr/>
          <Row>
            <Col lg="4">
              <div>x1</div>
            </Col>
            <Col lg="4">
              <div>x2</div>
            </Col>
            <Col lg="4">
              <div>x4</div>
            </Col>
          </Row>
          <Row>
            <Col lg="12">
              <FormGroup tag="fieldset">
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio1" />{' '}
                    4GB DDR4
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio1" />{' '}
                    8GB DDR4
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio1" />{' '}
                    16GB DDR4
                  </Label>
                </FormGroup>
              </FormGroup>
            </Col>
          </Row>
        </div>
      </Container>
    )
  }
}
