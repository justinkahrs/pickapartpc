import React, { Component } from 'react';

import {
  Row,
  Col,
  Label,
} from 'reactstrap';

const styles = {
  centerAlign: {
    textAlign: 'center',
  },
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
  smallCase: {
    borderRadius: '10px',
    backgroundColor: 'lightgrey',
    height: '5em',
    width: '5.5em',
  },
  mediumCase: {
    borderRadius: '10px',
    backgroundColor: 'lightgrey',
    height: '10em',
    width: '5.5em',
  },
  largeCase: {
    borderRadius: '10px',
    backgroundColor: 'lightgrey',
    height: '15em',
    width: '8em',
  }
};

export default class CaseSelect extends Component {
  render(){
    return (
      <div style={styles.leftAlign}>
        <Label style={styles.noBottomMargin} >Case Size</Label>
        <hr />
        <Row>
          <Col sm={{ size: 3, push: 2, pull: 2}}>
            <div style={styles.smallCase}>Mini-ITX</div>
          </Col>
          <Col sm={{ size: 3, push: 2, pull: 2}}>
            <div style={styles.mediumCase}>Micro-ATX</div>
          </Col>
          <Col sm={{ size: 3, push: 2, pull: 2}}>
            <div style={styles.largeCase}>ATX</div>
          </Col>
        </Row>
      </div>
    )
  }
}