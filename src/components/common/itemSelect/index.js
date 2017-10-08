import React, { Component } from 'react';
import { Button, Collapse, Label, Row } from 'reactstrap';
import './itemSelect.css';

import ItemDrawer from './ItemDrawer';

export default class ItemSelect extends Component {
  state = {
    selected: '',
    infoText: '',
  };

  setSelect = (items, name) => {
    this.setState({
      selected: name,
      infoText: items.find(i => i.name === name).text,
    });
  };


  render() {
    const { clear, items, name, selected, children } = this.props;
    const { confirmed, infoText } = this.state;
    return (
      <ItemDrawer
        className="itemDrawer"
        showMain={this.showMain}
        confirmed={confirmed}
        clear={clear}
        name={name}
        open={!!selected}
        selected={selected}
      >
        <Row style={{ minHeight: `${this.props.minHeight}` }} className="items">
          {children ||
            (items &&
              items.map(item => (
                <item.type
                  key={item.name}
                  {...item}
                  onClick={() => this.setSelect(items, item.name)}
                />
              )))}
        </Row>
        <Collapse isOpen={!!this.state.selected}>
          <div className="itemInfo">
            <Label>
              <u>{this.state.selected}</u>
            </Label>
            <br />
            {infoText}
            <br />
            <Button
              style={{ marginBottom: '1em' }}
              onClick={() => this.props.select(this.state.selected)}
            >
              Confirm Selection
            </Button>
          </div>
        </Collapse>
      </ItemDrawer>
    );
  }
}
