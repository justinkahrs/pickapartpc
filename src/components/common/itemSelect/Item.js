// @flow
import * as React from 'react';

const Item = ({ height, hover, onClick, toggleHover, width, children }) => {
  const styles = {
    case: {
      textAlign: 'center',
      borderRadius: '10px',
      backgroundColor: 'lightgrey',
      height,
      width,
      padding: '1em',
    },
    caseHover: {
      textAlign: 'center',
      borderRadius: '10px',
      backgroundColor: 'darkgrey',
      height,
      width,
      padding: '1em',
    },
    noButtonStyle: {
      backgroundColor: 'white',
      borderRadius: '10px',
      padding: '0px',
    },
  };
  return (
    <button style={styles.noButtonStyle} onClick={onClick}>
      <div
        style={hover ? styles.caseHover : styles.case}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
      >
        {children}
      </div>
    </button>
  );
};

export default Item;
