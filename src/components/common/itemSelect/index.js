import * as React from 'react';
import ItemDrawer from './ItemDrawer';
import ItemSelection from './ItemSelection';

export default class ItemSelect extends React.Component<
  {},
  { selectedItem: string, confirmed: boolean, open: boolean },
> {
  state = {
    selectedItem: '',
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
    if (this.state.selectedItem !== '') {
      this.setState({
        confirmed: true,
        open: false,
      });
    }
  };

  clear = () => {
    this.setState({
      confirmed: false,
      selectedItem: '',
    });
  };

  render() {
    const { items, selectItem } = this.props;
    const { confirmed, selectedItem, open } = this.state;
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
          items={items}
        />
      </ItemDrawer>
    );
  }
}
