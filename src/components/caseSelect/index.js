import React, {Component} from 'react';
import {
  Collapse,
  Container,
  Label,
  Row,
} from 'reactstrap';

import Case from './Case';

const styles = {
  leftAlign: {
    textAlign: 'left',
  },
  noBottomMargin: {
    marginBottom: '0',
  },
  label: {

  }
};

export default class CaseSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCase: '',
    }
    this.select = this.select.bind(this);
  }

  select(e){
    this.setState({
      selectedCase: this.state.selectedCase === e ? undefined : e,
    })
  }

  render() {
    const { selectedCase } = this.state;

    return (
      <Container style={styles.leftAlign}>

        <Label style={styles.noBottomMargin}>Case Size</Label>
        <hr/>
        <Row style={{marginBottom: '3em'}}>
          <Case height="5em" name="HTPC" slits={1} onClick={() => this.select('small')}/>
          <Case height="10em" name="Mid Tower" slits={3} onClick={() => this.select('medium')}/>
          <Case height="14em" name="Full Tower" slits={5} onClick={() => this.select('large')}/>

          <Collapse isOpen={this.state.selectedCase}>
            <Label><strong>{selectedCase}</strong></Label>
            <br/>
            {selectedCase !== '' ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel libero varius, fermentum dolor vitae, semper elit. Praesent vel metus sodales sapien aliquam dignissim eget in metus. Mauris facilisis dui a est imperdiet ornare. Integer sem mauris, porttitor quis risus quis, consectetur commodo ex. Donec aliquam rhoncus metus non sollicitudin. Fusce tincidunt imperdiet ipsum, id rutrum nulla cursus eget. Nulla vulputate tempor eros non porttitor. Donec hendrerit ut mauris nec iaculis. Nam in leo tristique, lacinia tortor vel, suscipit ex. Donec in metus nisi. Sed vestibulum nunc nisi, in molestie diam sagittis vel. Ut dapibus nibh dapibus, lacinia elit a, pulvinar tortor." : null}
          </Collapse>
        </Row>
      </Container>
    )
  }
}