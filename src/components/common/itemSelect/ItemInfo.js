import * as React from 'react';
import { Button, Col, Collapse, Label } from 'reactstrap';

const caseText = {
  small: 'small text',
  medium: 'medium text',
  large: 'large text',
};

const getText = (selected: string) => caseText[selected];

const ItemInfo = ({ selectedCase, confirmSelection }) => (
  <Collapse isOpen={selectedCase}>
    <Col>
      <Label>
        <strong>{selectedCase}</strong>
      </Label>
      <br />
      {getText(selectedCase)}
      <br />
      <Button onClick={confirmSelection}> Confirm Selection </Button>
    </Col>
  </Collapse>
);
export default ItemInfo;
