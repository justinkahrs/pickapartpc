import React from 'react';
import { Col, Container } from 'reactstrap';
import './pageContainer.css';

const PageContainer = ({ title, children }) => (
  <Container>
    <h1 className={`${title.replace(/\s/g, '')}__header`}>{title}</h1>
    <Col lg="12" className="pageContainer">
      {children}
    </Col>
  </Container>
);

export default PageContainer;
