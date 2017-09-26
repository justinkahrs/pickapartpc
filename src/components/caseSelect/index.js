import React, { Component } from 'react';
import ItemSelect from '../common/itemSelect';
import Case from './Case';

const itemText = {
  HTPC: 'htpc text',
  'Mid Tower': 'mid text',
  'Full Tower': 'full text',
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
      <ItemSelect className={`caseSelect ${this.props.className}`} itemText={itemText} selectedItem={this.state.selectedCase}>
        {items &&
          items.map(props => (
            <Case
              className="case"
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
