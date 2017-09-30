import React, { Component } from 'react';
import ItemSelect from '../common/itemSelect';
import Cpu from './Cpu';

const itemText = {
  AMD: 'If you know you want to run an AMD machine.',
  Intel: 'If you know you want to run an Intel machine.',
};

const items = [{ name: 'AMD' }, { name: 'Intel' }];

class CpuSelect extends Component {
  state = {
    selectedCpu: '',
  };

  select = (e: string) => {
    this.setState({
      selectedCpu: this.state.selectedCpu === e ? undefined : items.find(i => e === i.name).name,
    });
  };

  render() {
    return (
      <ItemSelect
        minHeight={'100px'}
        itemText={itemText}
        selectedItem={this.state.selectedCpu}
        name={'CPU'}
      >
        {items &&
          items.map(props => (
            <Cpu
              {...props}
              key={props.name}
              onClick={() => {
                this.select(props.name);
              }}
            />
          ))}
      </ItemSelect>
    );
  }
}
export default CpuSelect;
