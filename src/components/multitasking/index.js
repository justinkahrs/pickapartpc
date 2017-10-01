import React, { Component } from 'react';
import { Col, ListGroup, ListGroupItem } from 'reactstrap';
import ItemSelect from '../common/itemSelect';

const itemText = {
  Low: 'For the budgest conscious, or light use machine ',
  Normal:
    "You occasionally leave a lot of tabs open, but who doesn't? Fine for social media, schoolwork, or light office work.",
  Excessive: 'You love leaving all of your favorite apps open, and hate restarting your computer.',
  Ridiculous: "You know what a virtual machine is, and you aren't afraid to use it.",
};

const items = [{ name: 'Low' }, { name: 'Normal' }, { name: 'Excessive' }, { name: 'Ridiculous' }];

class Multitasking extends Component {
  state = {
    selected: '',
  };

  select = (e: string) => {
    this.setState({
      selected: this.state.selected === e ? undefined : items.find(i => e === i.name).name,
    });
  };

  render() {
    return (
      <ItemSelect
        minHeight={'230px'}
        itemText={itemText}
        selectedItem={this.state.selected}
        name={'Multitasking'}
      >
        <Col>
          <ListGroup>
            {items &&
              items.map(props => (
                <ListGroupItem
                  key={props.name}
                  active={this.state.selected === props.name}
                  onClick={() => {
                    this.select(props.name);
                  }}
                >
                  {props.name}
                </ListGroupItem>
              ))}
          </ListGroup>
        </Col>
      </ItemSelect>
    );
  }
}
export default Multitasking;
