import React from 'react';
import { connect } from 'react-redux';
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

function Multitasking({ clear, select, selected }) {
  return (
    <ItemSelect
      minHeight={'230px'}
      items={items}
      select={select}
      selected={selected}
      name={'Multitasking'}
      clear={clear}
      needsListGroup
    />
  );
}

const mapDispatchToProps = dispatch => ({
  select: (id) => {
    dispatch(MultitaskingActions.selectMultitasking(id));
  },
  clear: () => {
    dispatch(MultitaskingActions.clearMultitaksing());
  },
});
const mapStateToProps = state => ({
  selected: state.multitasking,
});
export default connect(mapStateToProps, mapDispatchToProps)(Multitasking);
