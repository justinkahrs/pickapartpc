// @flow
import * as React from 'react';
import ItemDrawer from './ItemDrawer';
import ItemSelection from './ItemSelection';

export default class ItemSelect extends React.Component<
  {},
  { confirmed: boolean, open: boolean },
> {
  state = {
    confirmed: false,
    open: true,
  };

  showMain = () => {
    if (this.state.confirmed) {
      this.setState({
        open: !this.state.open,
      });
    }
  };

  confirmSelection = () => {
    this.setState({
      confirmed: true,
      open: false,
    });
  };

  clear = () => {
    this.setState({
      confirmed: false,
      selectedItem: '',
    });
  };

  render() {
    const { selectedItem, selectItem, children } = this.props;
    const { confirmed, open } = this.state;
    return (
      <ItemDrawer
        showMain={this.showMain}
        confirmed={confirmed}
        clear={this.clear}
        open={open}
        selectedItem={selectedItem}
      >
        <ItemSelection
          selectItem={selectItem}
          selectedItem={selectedItem}
          confirmSelection={this.confirmSelection}
        >
          {children}
        </ItemSelection>
      </ItemDrawer>
    );
  }
}
