import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';
import CaseSelect from '../components/case';
import CpuSelect from '../components/cpu';
import Multitasking from '../components/multitasking';
import PageContainer from '../components/common/pageContainer';
import './build.css';

class Build extends Component {
  state = {
    modal: false,
  };
  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };
  render() {
    const { ready } = this.props;
    return (
      <PageContainer title="Build">
        <CaseSelect />
        <CpuSelect />
        <Multitasking />
        {ready && <Button onClick={this.toggle}>Buy now</Button>}
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Congratulations!</ModalHeader>
          <ModalBody>You are one step closer to building the computer of your dreams!</ModalBody>
          <ModalFooter>
            <Button onClick={this.toggle}>I acknowledge this site saved my life.</Button>
          </ModalFooter>
        </Modal>
      </PageContainer>
    );
  }
}
const mapStateToProps = state => ({
  ready: state.caseSize && state.multitasking && state.cpu,
});
export default connect(mapStateToProps, null)(Build);
