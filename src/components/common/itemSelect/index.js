import React, { Component } from 'react';
import { Button, Collapse, Label, Row } from 'reactstrap';
import './itemSelect.css';

import ItemDrawer from './ItemDrawer';

export default class ItemSelect extends Component {
  state = {
    confirmed: false,
    open: true,
  };

  getText = () => this.props.items && this.props.items.map(item => item.text);

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
    const { items, name, selectedItem, children } = this.props;
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
        <Row style={{ minHeight: `${this.props.minHeight}` }} className="items">
          {children ||
            (items &&
              items.map(item => (
                <item.type key={item.name} {...item} onClick={() => this.props.select(item.name)} />
              )))}
        </Row>
        <Collapse isOpen={!!selectedItem}>
          <div className="itemInfo">
            <Label>
              <u>{selectedItem}</u>
            </Label>
            <br />
            {selectedItem !== '' ? items.find(item => item.name === selectedItem).text : null}
            <br />
            <Button style={{ marginBottom: '1em' }} onClick={this.confirmSelection}>
              Confirm Selection
            </Button>
          </div>
        </Collapse>
      </ItemDrawer>
    );
  }
}
