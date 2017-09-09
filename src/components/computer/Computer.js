import React from 'react';
import './Computer.css';
import _ from 'lodash/';

const Computer = props => (
  <div className="case">
    <div className="cpu" />
    {_.times(props.gpu, String).map((obj, index) => <div key={index} className="gpu" />)}
  </div>
);
export default Computer;
