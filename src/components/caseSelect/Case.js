import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Col,
} from 'reactstrap';
import times from 'lodash/times';

export default class Case extends Component {
  static contextTypes = {
    // some context types
  };

  static propTypes = {
    height: PropTypes.number,
  };

  static defaultProps = {
    height: '10em',
    width: '5.5em',
    slits: 1,
  };

  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    };
    this.toggleHover = this.toggleHover.bind(this);
  }

  styles = {
    case: {
      textAlign: 'center',
      borderRadius: '10px',
      backgroundColor: 'lightgrey',
      height: this.props.height,
      width: this.props.width,
      padding: '1em',
    },
    caseHover: {
      textAlign: 'center',
      borderRadius: '10px',
      backgroundColor: 'darkgrey',
      height: this.props.height,
      width: this.props.width,
      padding: '1em',
    },
  };

  toggleHover() {
    this.setState({
      hover: !this.state.hover,
    });
  }

  render() {
    return (
      <Col sm="4">
        <div>
          <a style={{}} onClick={this.props.onClick}>
            <div style={this.state.hover ? this.styles.caseHover : this.styles.case} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
              {this.props.name}
              {times(this.props.slits).map((x, i) => <hr key={i} />)}
            </div>
          </a>
        </div>

      </Col>
    );
  }
}
