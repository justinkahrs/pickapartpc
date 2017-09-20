// @flow
import * as React from 'react';
import ItemSelect from '../common/itemSelect';
import Case from './Case';

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
        <Case
          height="5em"
          name="HTPC"
          slits={1}
          key={'small'}
          onClick={() => this.select('small')}
        />
        <Case
          height="10em"
          name="Mid Tower"
          slits={3}
          key={'medium'}
          onClick={() => this.select('medium')}
        />
        <Case
          height="14em"
          name="Full Tower"
          slits={5}
          key={'large'}
          onClick={() => this.select('large')}
        />
      </ItemSelect>
    );
  }
}
export default CaseSelect;
