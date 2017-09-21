import * as React from 'react';
import * as _ from 'lodash';
import { Col } from 'reactstrap';
import Item from '../common/itemSelect/Item';

class Case extends React.Component<
  {
    height: string,
    width: string,
    onClick: Function,
    name: string,
    slits: number,
  },
  { hover: boolean },
> {
  static defaultProps = {
    height: '10em',
    width: '5em',
  };

  state = {
    hover: false,
  };

  toggleHover = () => {
    this.setState({
      hover: !this.state.hover,
    });
  };

  render() {
    const { toggleHover } = this;
    const { name, slits, onClick } = this.props;
    const { hover } = this.state;
    return (
      <Col sm="4">
        <Item hover={hover} onClick={onClick} toggleHover={toggleHover}>
          <div style={{ textAlign: 'center' }}>{name}</div>
          {_.times(slits).map((x, i) => <hr key={i} />)}
        </Item>
      </Col>
    );
  }
}
export default Case;
