import * as React from 'react';
import './item.css';

const Item = ({ onClick, children }) => (
  <button className="item__button" onClick={onClick}>
    {children}
  </button>
);

export default Item;
