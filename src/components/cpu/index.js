import React from 'react';
import { connect } from 'react-redux';
import ItemSelect from '../common/itemSelect';
import Cpu from './Cpu';
import * as CpuActions from '../../actions/cpu';

const items = [
  { type: Cpu, name: 'AMD', text: 'If you know you want to run an AMD machine.' },
  { type: Cpu, name: 'Intel', text: 'If you know you want to run an Intel machine.' },
];

function CpuSelect({ clear, select, selected }) {
  return (
    <ItemSelect
      items={items}
      type={Cpu}
      minHeight={'150px'}
      select={select}
      selected={selected}
      name={'CPU'}
      clear={clear}
    />
  );
}
const mapDispatchToProps = dispatch => ({
  select: (id) => {
    dispatch(CpuActions.selectCpu(id));
  },
  clear: () => {
    dispatch(CpuActions.clearCpu());
  },
});
const mapStateToProps = state => ({
  selected: state.cpu,
});
export default connect(mapStateToProps, mapDispatchToProps)(CpuSelect);
