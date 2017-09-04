import React, { Component } from 'react';
import {
  Col,
  Label,
  Row,
} from 'reactstrap';
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

export default class CpuSelect extends Component {
  render() {
    return (
      <div style={styles.leftAlign}>
        <Label style={styles.noBottomMargin}>CPU</Label>
        <hr/>
        <Row>
          <Col lg="6">
            <div style={styles.amdCPU}>AMD</div>
          </Col>
          <Col lg="6">
            <div style={styles.intelCPU}>INTEL</div>
          </Col>
        </Row>
      </div>
    )
  }
}