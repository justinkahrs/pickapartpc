import React, { Component } from 'react';
import ItemSelect from '../common/itemSelect';
import Case from './Case';

const itemText = {
  HTPC:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim reprehenderit nulla impedit similique repudiandae placeat aliquam vel, ad nesciunt laborum, officiis facere, ducimus natus asperiores? Ipsa iure similique ex eius!',
  'Mid Tower':
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat laudantium magnam, id eaque eum qui magni soluta error harum, eveniet nam doloribus nisi dolorum ducimus aspernatur, aliquam aliquid voluptatum dolore.',
  'Full Tower':
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, recusandae! Voluptatum maxime possimus eos laudantium tempore. Quod facilis provident veritatis incidunt iure impedit necessitatibus nemo nulla, aperiam inventore quidem aliquam!',
};

const items = [
  { name: 'HTPC', slits: 1 },
  { name: 'Mid Tower', slits: 3 },
  { name: 'Full Tower', slits: 5 },
];

class CaseSelect extends Component {
  state = {
    selectedCase: '',
  };

  select = (e: string) => {
    this.setState({
      selectedCase: this.state.selectedCase === e ? undefined : items.find(i => e === i.name).name,
    });
  };

  render() {
    return (
      <ItemSelect itemText={itemText} selectedItem={this.state.selectedCase}>
        {items &&
          items.map(props => (
            <Case
              className="item--center"
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
export default CaseSelect;
