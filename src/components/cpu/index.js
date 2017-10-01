import React from 'react';
import { connect } from 'react-redux';
import ItemSelect from '../common/itemSelect';
import Cpu from './Cpu';
import * as CpuActions from '../../actions/cpu';

const items = [
  { type: Cpu, name: 'AMD', text: 'If you know you want to run an AMD machine.' },
  { type: Cpu, name: 'Intel', text: 'If you know you want to run an Intel machine.' },
];

function CpuSelect({ select, selected }) {
  return (
    <ItemSelect
      items={items}
      type={Cpu}
      minHeight={'230px'}
      select={select}
      selectedItem={selected}
      name={'Case Size'}
    />
  );
}
const mapDispatchToProps = dispatch => ({
  select: (id) => {
    dispatch(CpuActions.selectCpu(id));
  },
});
const mapStateToProps = state => ({
  selected: state.cpu,
});
export default connect(mapStateToProps, mapDispatchToProps)(CpuSelect);
