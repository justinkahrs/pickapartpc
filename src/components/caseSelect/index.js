import * as React from 'react';
import ItemSelect from '../common/itemSelect';
import Case from './Case';

const items = [
  { height: '5em', name: 'HTPC', slits: 1, key: 'small' },
  { height: '10em', name: 'Mid Tower', slits: 3, key: 'medium' },
  { height: '14em', name: 'Full Tower', slits: 5, key: 'large' },
];

class CaseSelect extends React.Component<{}, {}> {
  state = {
    selectedCase: '',
  };

  select = (e: string) => {
    this.setState({
      selectedCase: this.state.selectedCase === e ? undefined : e,
    });
  };

  render() {
    return (
      <ItemSelect selectedItem={this.state.selectedCase}>
        {items &&
          items.map(props => (
            <Case
              {...props}
              onClick={() => {
                this.select(props.key);
              }}
            />
          ))}
      </ItemSelect>
    );
  }
}
export default CaseSelect;
