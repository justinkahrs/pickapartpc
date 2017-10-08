import React, { Component } from 'react';
import { Button, Col, Collapse, Label, ListGroup, ListGroupItem, Row } from 'reactstrap';
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

  getItems = items =>
    items.map(item => (
      <item.type key={item.name} {...item} onClick={() => this.setSelect(items, item.name)}>
        {item.name}
      </item.type>
    ));

  getListItems = items =>
    items.map(item => (
      <ListGroupItem
        active={this.state.selected === item.name}
        key={item.name}
        onClick={() => this.setSelect(items, item.name)}
      >
        {item.name}
      </ListGroupItem>
    ));

  render() {
    const { clear, items, name, needsListGroup, selected } = this.props;
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
          {needsListGroup ? (
            <Col>
              <ListGroup>{this.getListItems(items)}</ListGroup>
            </Col>
          ) : (
            this.getItems(items)
          )}
        </Row>
        <Collapse isOpen={!!this.state.selected}>
          <div className="itemInfo">
            <Label>
              <u>{selected ? '' : this.state.selected}</u>
            </Label>
            <br />
            {selected ? '' : infoText}
            <br />
            <Button
              style={{ marginBottom: '1.5em' }}
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
