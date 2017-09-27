import React, { Component } from 'react';
import { Button, Collapse, Label } from 'reactstrap';
import './itemSelect.css';

import ItemDrawer from './ItemDrawer';

export default class ItemSelect extends Component {
  state = {
    confirmed: false,
    open: true,
  };

  getText = selectedItem => this.props.itemText[selectedItem];

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
    const { selectedItem, children } = this.props;
    const { confirmed, open } = this.state;
    return (
      <ItemDrawer
        className="itemDrawer"
        showMain={this.showMain}
        confirmed={confirmed}
        clear={this.clear}
        open={open}
        selectedItem={selectedItem}
      >
        <div className="items">{children}</div>
        <Collapse isOpen={!!selectedItem}>
          <Label>
            <strong>{selectedItem}</strong>
          </Label>
          <br />
          <div className="itemInfo">{this.getText(selectedItem)}</div>
          <br />
          <Button onClick={this.confirmSelection}> Confirm Selection </Button>
        </Collapse>
      </ItemDrawer>
    );
  }
}
