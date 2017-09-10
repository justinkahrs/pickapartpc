// @flow
import React, { Component } from 'react';
import { Row, Col, Label, Input, FormGroup } from 'reactstrap';

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
export default class RamSelect extends Component {
  render() {
    return (
      <div style={styles.leftAlign}>
        <Label style={styles.noBottomMargin}>RAM</Label>
        <hr />
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
                  <Input type="radio" name="radio1" /> 4GB DDR4
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" /> 8GB DDR4
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" /> 16GB DDR4
                </Label>
              </FormGroup>
            </FormGroup>
          </Col>
        </Row>
      </div>
    );
  }
}
