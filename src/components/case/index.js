import React, { Component } from 'react';
import ItemSelect from '../common/itemSelect';
import Case from './Case';

const itemText = {
  Small:
    'Great when working with limited space. It can still pack a punch, but it will cost more if it needs to be a real workhorse.',
  'Mid Tower': "Probably what you think of when you think 'Desktop PC'.",
  'Full Tower':
    'A huge ass case for when you need many hard drives, multiple graphics cards, or watercooling.',
};

const items = [
  { name: 'Small', slits: 1 },
  { name: 'Mid Tower', slits: 4 },
  { name: 'Full Tower', slits: 7 },
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
      <ItemSelect
        minHeight={'230px'}
        itemText={itemText}
        selectedItem={this.state.selectedCase}
        name={'Case Size'}
      >
        {items &&
          items.map(props => (
            <Case
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
