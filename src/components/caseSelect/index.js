// @flow
import * as React from 'react';
import { Button, Collapse, Container, Label, Row } from 'reactstrap';
import Check from 'react-icons/lib/md/check-circle';
import Case from './Case';

export default class CaseSelect extends React.Component<
  {},
  { selectedCase: string, confirmed: boolean },
> {
  state = {
    selectedCase: '',
    confirmed: false,
  };

  styles = {
    leftAlign: {
      textAlign: 'left',
    },
    noBottomMargin: {
      marginBottom: '0',
    },
    label: {},
  };

  selectCase = (e: string) => {
    this.setState({
      selectedCase: this.state.selectedCase === e ? '' : e,
    });
  };

  confirmSelection = () => {
    if (this.state.selectedCase !== '') {
      this.setState({
        confirmed: !this.state.confirmed,
      });
    }
  };

  render() {
    const { leftAlign, noBottomMargin } = this.styles;
    const { confirmed, selectedCase } = this.state;
    return (
      <Container style={leftAlign} onClick={this.confirmSelection}>
        <Label style={noBottomMargin}>Case Size</Label>
        <hr />
        <Collapse isOpen={!confirmed}>
          <Row style={{ marginBottom: '3em' }}>
            <Case height="5em" name="HTPC" slits={1} onClick={() => this.selectCase('small')} />
            <Case
              height="10em"
              name="Mid Tower"
              slits={3}
              onClick={() => this.selectCase('medium')}
            />
            <Case
              height="14em"
              name="Full Tower"
              slits={5}
              onClick={() => this.selectCase('large')}
            />
            <Collapse isOpen={selectedCase}>
              <Label>
                <strong>{selectedCase}</strong>
              </Label>
              <br />
              {selectedCase !== '' ? (
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel libero varius, fermentum dolor vitae, semper elit. Praesent vel metus sodales sapien aliquam dignissim eget in metus. Mauris facilisis dui a est imperdiet ornare. Integer sem mauris, porttitor quis risus quis, consectetur commodo ex. Donec aliquam rhoncus metus non sollicitudin. Fusce tincidunt imperdiet ipsum, id rutrum nulla cursus eget. Nulla vulputate tempor eros non porttitor. Donec hendrerit ut mauris nec iaculis. Nam in leo tristique, lacinia tortor vel, suscipit ex. Donec in metus nisi. Sed vestibulum nunc nisi, in molestie diam sagittis vel. Ut dapibus nibh dapibus, lacinia elit a, pulvinar tortor.\n'
              ) : null}
              <Button onClick={this.confirmSelection}> Confirm Selection </Button>
              <Check style={{ color: 'green' }} />
            </Collapse>
          </Row>
        </Collapse>
      </Container>
    );
  }
}
