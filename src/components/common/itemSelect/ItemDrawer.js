import React from 'react';
import { Collapse, Container, Label } from 'reactstrap';
import Check from 'react-icons/lib/md/check-circle';
import Trash from 'react-icons/lib/ti/trash';
import './itemDrawer.css';

const ItemDrawer = ({ selectedItem, clear, confirmed, name, open, showMain, children }) => (
  <Container className={open ? 'itemDrawer' : 'itemDrawer--collapsed'}>
    <div className="itemDrawer__header">
      <Label className="itemDrawer__label" onClick={showMain}>
        <strong>{name}</strong> {confirmed && selectedItem && `> ${selectedItem}`}
      </Label>
      {confirmed && (
        <div className="itemDrawer__buttons">
          <Check className="itemDrawer__checkButton" />
          <Trash className="itemDrawer__trashButton" onClick={clear} />
        </div>
      )}
    </div>
    <hr />
    <Collapse className="" isOpen={!confirmed || open}>
      {children}
    </Collapse>
  </Container>
);
export default ItemDrawer;
