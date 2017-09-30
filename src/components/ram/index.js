import React, { Component } from 'react';
import ItemSelect from '../common/itemSelect';
import Ram from './Ram';

const itemText = {
  '8GB':
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim reprehenderit nulla impedit similique repudiandae placeat aliquam vel, ad nesciunt laborum, officiis facere, ducimus natus asperiores? Ipsa iure similique ex eius!',
  '16GB':
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat laudantium magnam, id eaque eum qui magni soluta error harum, eveniet nam doloribus nisi dolorum ducimus aspernatur, aliquam aliquid voluptatum dolore.',
  '32GB':
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat laudantium magnam, id eaque eum qui magni soluta error harum, eveniet nam doloribus nisi dolorum ducimus aspernatur, aliquam aliquid voluptatum dolore.',
};

const items = [{ name: '8GB' }, { name: '16GB' }, { name: '32GB' }];

class RamSelect extends Component {
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
      <ItemSelect itemText={itemText} selectedItem={this.state.selectedCpu} name={'RAM'}>
        {items &&
          items.map(props => (
            <Ram
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
export default RamSelect;
