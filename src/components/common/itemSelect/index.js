import React, { Component } from 'react';
import { Button, Collapse, Label, Row } from 'reactstrap';
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
    const { name, selectedItem, children } = this.props;
    const { confirmed, open } = this.state;
    return (
      <ItemDrawer
        className="itemDrawer"
        showMain={this.showMain}
        confirmed={confirmed}
        clear={this.clear}
        name={name}
        open={open}
        selectedItem={selectedItem}
      >
        <Row className="items">{children}</Row>
        <Collapse isOpen={!!selectedItem}>
          <div className="itemInfo">
            <Label>
              <strong>{selectedItem}</strong>
            </Label>
            <br />
            {this.getText(selectedItem)}
            <br />
            <Button onClick={this.confirmSelection}> Confirm Selection </Button>
          </div>
        </Collapse>
      </ItemDrawer>
    );
  }
}
