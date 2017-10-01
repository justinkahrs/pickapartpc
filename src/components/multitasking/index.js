import React from 'react';
import { connect } from 'react-redux';
import { Col, ListGroup, ListGroupItem } from 'reactstrap';
import ItemSelect from '../common/itemSelect';
import * as MultitaskingActions from '../../actions/multitasking';

const items = [
  { name: 'Low', text: 'For the budgest conscious, or light use machine ' },
  {
    name: 'Normal',
    text:
      "You occasionally leave a lot of tabs open, but who doesn't? Fine for social media, schoolwork, or light office work.",
  },
  {
    name: 'Excessive',
    text: 'You love leaving all of your favorite apps open, and hate restarting your computer.',
  },
  {
    name: 'Ridiculous',
    text: "You know what a virtual machine is, and you aren't afraid to use it.",
  },
];

function Multitasking({ select, selected }) {
  return (
    <ItemSelect minHeight={'230px'} items={items} selectedItem={selected} name={'Multitasking'}>
      <Col>
        <ListGroup>
          {items &&
            items.map(props => (
              <ListGroupItem
                key={props.name}
                active={selected === props.name}
                onClick={() => {
                  select(props.name);
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

const mapDispatchToProps = dispatch => ({
  select: (id) => {
    dispatch(MultitaskingActions.selectMultitasking(id));
  },
});
const mapStateToProps = state => ({
  selected: state.multitasking,
});
export default connect(mapStateToProps, mapDispatchToProps)(Multitasking);
