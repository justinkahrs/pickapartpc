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

  selectCase = this.props.actions;

  items = [
    <Case height="5em" name="HTPC" slits={1} onClick={this.selectCase} />,
    <Case height="10em" name="Mid Tower" slits={3} onClick={this.selectCase} />,
    <Case height="14em" name="Full Tower" slits={5} onClick={this.selectCase} />,
  ];
  render() {
    return <ItemSelect selectedItem={this.state.selectedCase} items={this.items} />;
  }
}
const mapStateToProps = state => ({ cart: state.cart });
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(caseActions, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(CaseSelect);
