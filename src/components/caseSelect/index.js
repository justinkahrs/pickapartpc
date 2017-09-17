import * as React from 'react';
import ItemSelect from '../common/itemSelect';
import Case from './Case';

export default class CaseSelect extends React.Component<{}, {}> {
  state = {
    selectedCase: '',
    confirmed: false,
    open: true,
  };

  selectCase = (e: string) => {
    this.setState({
      selectedCase: this.state.selectedCase === e ? '' : e,
    });
  };

  items = [
    <Case height="5em" name="HTPC" slits={1} onClick={this.selectCase} />,
    <Case height="10em" name="Mid Tower" slits={3} onClick={this.selectCase} />,
    <Case height="14em" name="Full Tower" slits={5} onClick={this.selectCase} />,
  ];
  render() {
    return <ItemSelect selectItem={this.selectCase} items={this.items} />;
  }
}
