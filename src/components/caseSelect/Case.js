// @flow
import * as React from 'react';
import { Col } from 'reactstrap';
import * as _ from 'lodash';

class Case extends React.Component<
  { height?: string, width: ?string, onClick: Function },
  { hover: boolean },
> {
  static defaultProps = {
    height: '10em',
    width: '5em',
  };

  state = {
    hover: false,
  };

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

  toggleHover = () => {
    this.setState({
      hover: !this.state.hover,
    });
  };

  render() {
    return (
      <Col sm="4">
        <div>
          <button onClick={this.props.onClick}>
            <div
              style={this.state.hover ? this.styles.caseHover : this.styles.case}
              onMouseEnter={this.toggleHover}
              onMouseLeave={this.toggleHover}
            >
              {this.props.name}
              {_.times(this.props.slits).map((x, i) => <hr key={i} />)}
            </div>
          </button>
        </div>
      </Col>
    );
  }
}
export default Case;
