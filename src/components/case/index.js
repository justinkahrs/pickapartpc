import React from 'react';
import { connect } from 'react-redux';
import ItemSelect from '../common/itemSelect';
import Case from './Case';
import * as CaseActions from '../../actions/case';

const items = [
  {
    type: Case,
    name: 'Small',
    text:
      'Great when working with limited space. It can still pack a punch, but it will cost more if it needs to be a real workhorse.',
    slits: 1,
  },
  {
    type: Case,
    name: 'Mid Tower',
    text: "Probably what you think of when you think 'Desktop PC'.",
    slits: 3,
  },
  {
    type: Case,
    name: 'Full Tower',
    text:
      'A huge ass case for when you need many hard drives, multiple graphics cards, or watercooling.',
    slits: 7,
  },
];

function CaseSelect({ select, selected }) {
  return (
    <ItemSelect
      items={items}
      type={Case}
      minHeight={'230px'}
      select={select}
      selectedItem={selected}
      name={'Case Size'}
    />
  );
}
const mapDispatchToProps = dispatch => ({
  select: (id) => {
    dispatch(CaseActions.selectCase(id));
  },
});
const mapStateToProps = state => ({
  selected: state.caseSize,
});
export default connect(mapStateToProps, mapDispatchToProps)(CaseSelect);
