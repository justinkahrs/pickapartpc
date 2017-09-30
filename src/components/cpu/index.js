import React, { Component } from 'react';
import ItemSelect from '../common/itemSelect';
import Cpu from './Cpu';

const itemText = {
  AMD:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim reprehenderit nulla impedit similique repudiandae placeat aliquam vel, ad nesciunt laborum, officiis facere, ducimus natus asperiores? Ipsa iure similique ex eius!',
  Intel:
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat laudantium magnam, id eaque eum qui magni soluta error harum, eveniet nam doloribus nisi dolorum ducimus aspernatur, aliquam aliquid voluptatum dolore.',
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
      <ItemSelect itemText={itemText} selectedItem={this.state.selectedCpu} name={'CPU'}>
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
