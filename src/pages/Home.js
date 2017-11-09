import React, { Component } from 'react';
import { Button, Col, Row } from 'reactstrap';
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
        <div style={{ fontSize: '20px' }}>
          <Row>
            <Col lg="12">
              <blockquote style={{ marginBottom: '3em' }} className="quote">
                Building a computer is easy, knowing what to put in it is hard.
              </blockquote>
            </Col>
          </Row>
          <strong>
            <u style={{ fontSize: '24px' }}>Goal</u>
          </strong>
          <div style={{ textAlign: 'justify', fontSize: '20px' }}>
            This site is designed to remove the technical frustrations when building a custom PC.
            Simply answer a few questions about how you will use the machine, and we&#39;ll put
            together the part list for you. Once you&#39;ve received all of your parts, simply
            follow our step-by-step guide to put everything together. Contrary to their portrayal in
            television, computers are mostly just a few parts put together like a lego set.
          </div>
          <div style={{ marginTop: '2em', marginBottom: '3em' }}>
            <strong style={{ fontSize: '40px' }}>You can do this!</strong>
          </div>
          <Row>
            <Col xs="12" lg="4" style={{ marginTop: '2em', marginBottom: '1em' }}>
              <strong>
                <u>Tools Required</u>
              </strong>
              <div>Phillips Screwdriver</div>
              <strong>
                <u>Time Needed</u>
              </strong>
              <div>~3-4 hours if it&#39;s your first time</div>
            </Col>
            <Col xs="12" lg="4" style={{ marginTop: '2em', marginBottom: '1em' }}>
              <strong>
                <u>Money saved</u>
              </strong>
              <div>$$$$</div>
              <strong>
                <u>Warranty</u>
              </strong>
              <div>You can fix it!</div>
            </Col>
            <Col xs="12" lg="4" style={{ marginTop: '2em', marginBottom: '1em' }}>
              <strong>
                <u>People impressed</u>
              </strong>
              <div>At least one</div>
              <strong>
                <u>Geek Points Earned</u>
              </strong>
              <div>150+</div>
            </Col>
          </Row>
          <Button style={{ marginTop: '2em', fontSize: '20px' }} onClick={this.goBuild}>
            Let&#39;s get started
          </Button>
        </div>
      </PageContainer>
    );
  }
}

export default withRouter(Home);
