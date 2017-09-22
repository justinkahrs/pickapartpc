import React, { Component } from 'react';
import * as _ from 'lodash';
import { Col } from 'reactstrap';
import Item from '../common/itemSelect/Item';

class Case extends Component {
  state = {
    hover: false,
  };

  toggleHover = () => {
    this.setState({
      hover: !this.state.hover,
    });
  };

  render() {
    const { name, slits, onClick } = this.props;
    const { hover } = this.state;
    return (
      <Col sm="4">
        <Item hover={hover} onClick={onClick} toggleHover={this.toggleHover}>
          <div style={{ textAlign: 'center' }}>{name}</div>
          {_.times(slits).map(x => <hr key={x} />)}
        </Item>
      </Col>
    );
  }
}
export default Case;
