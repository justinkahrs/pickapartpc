// @flow
import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as caseActions from '../../actions/case';
import ItemSelect from '../common/itemSelect';
import Case from './Case';

class CaseSelect extends React.Component<{}, {}> {
  state = {
    selectedCase: '',
    confirmed: false,
    open: true,
  };

  select = (e: string) => {
    console.log(e);
    this.setState({
      selectedCase: this.state.selectedCase === e ? undefined : e,
    });
  };

  render() {
    return (
      <ItemSelect selectedItem={this.state.selectedCase}>
        <Case
          height="5em"
          name="HTPC"
          slits={1}
          key={'small'}
          onClick={() => this.select('small')}
        />
        <Case
          height="10em"
          name="Mid Tower"
          slits={3}
          key={'medium'}
          onClick={() => this.select('medium')}
        />
        <Case
          height="14em"
          name="Full Tower"
          slits={5}
          key={'large'}
          onClick={() => this.select('large')}
        />
      </ItemSelect>
    );
  }
}
const mapStateToProps = state => ({ cart: state.cart });
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(caseActions, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(CaseSelect);
