import React, { Component } from 'react';
import { Button, Col } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import PageContainer from '../components/common/pageContainer';
import './home.css';

class Home extends Component {
  goBuild = () => {
    this.props.history.push('/build');
  };
  render() {
    return (
      <PageContainer title="Pick a Part PC" header>
        <blockquote>Building a computer is easy, knowing what to put in it is hard.</blockquote>
        <strong>
          <u>Mission Statement</u>
        </strong>
        <div style={{ textAlign: 'left' }}>
          &emsp;This site is designed to remove the technical frustrations when building a custom
          PC. Simply answer a few questions about how you will use the machine, and we&#39;ll put
          together the part list for you. Once you&#39;ve received all of your parts, simply follow
          our step-by-step guide to put everything together. Contrary to their portrayal in
          television, computers are mostly just a few parts put together like a lego set.
        </div>
        <strong>You can do this!</strong>
        <br />
        <br />
        <Col xs="12">
          <strong>
            <u>Tools Required</u>
          </strong>
          <div>Phillips Screwdriver</div>
          <strong>
            <u>Time Needed</u>
          </strong>
          <div>~3-4 hours if it&#39;s your first time</div>
          <br />
        </Col>
        <Button onClick={this.goBuild}>Let&#39;s get started</Button>
      </PageContainer>
    );
  }
}

export default withRouter(Home);
