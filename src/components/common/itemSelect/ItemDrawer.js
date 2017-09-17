import * as React from 'react';
import { Collapse, Container, Label } from 'reactstrap';
import Check from 'react-icons/lib/md/check-circle';
import Trash from 'react-icons/lib/ti/trash';

const styles = {
  leftAlign: {
    textAlign: 'left',
  },
  noBottomMargin: {
    marginBottom: '0',
  },
  icons: {
    float: 'right',
  },
  check: {
    color: 'green',
    width: '2em',
    height: '2em',
  },
  trash: {
    color: 'darkgrey',
    width: '2em',
    height: '2em',
  },
};

const ItemDrawer = ({ selectedItem, clear, confirmed, open, showMain, children }) => (
  <Container style={styles.leftAlign}>
    <Label onClick={showMain} style={styles.noBottomMargin}>
      Case Size {selectedItem && `> ${selectedItem}`}
    </Label>
    {confirmed && (
      // TO-DO extract this as a component
      <div style={styles.icons}>
        <Check style={styles.check} />
        <Trash style={styles.trash} onClick={clear} />
      </div>
    )}
    <hr />
    <Collapse isOpen={!confirmed || open}>{children}</Collapse>
  </Container>
);
export default ItemDrawer;
