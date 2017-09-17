import * as React from 'react';
import { Row } from 'reactstrap';
import ItemInfo from './ItemInfo';

const ItemSelection = ({ items, selectedItem, confirmSelection }) => (
  <Row style={{ marginBottom: '3em' }}>
    {items}
    <ItemInfo selectedCase={selectedItem} confirmSelection={confirmSelection} />
  </Row>
);
export default ItemSelection;
