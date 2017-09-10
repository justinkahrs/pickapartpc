// @flow
import React from 'react';
import _ from 'lodash';
import './Computer.css';

const Computer = (props: any) => (
  <div className="case">
    <div className="cpu" />
    {_.times(props.gpu, String).map((obj, index) => <div key={index} className="gpu" />)}
  </div>
);
export default Computer;
