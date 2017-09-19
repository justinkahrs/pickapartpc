import * as React from 'react';
import { Row } from 'reactstrap';
import ItemInfo from './ItemInfo';

const ItemSelection = ({ selectedItem, confirmSelection, children }) => (
  <Row style={{ marginBottom: '3em' }}>
    {children}
    <ItemInfo selectedCase={selectedItem} confirmSelection={confirmSelection} />
  </Row>
);
export default ItemSelection;
