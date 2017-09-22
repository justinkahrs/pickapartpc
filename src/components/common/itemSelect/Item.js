import * as React from 'react';

const Item = ({ height, hover, onClick, toggleHover, width, children }) => {
  const styles = {
    defaultItemStyle: {
      textAlign: 'center',
      borderRadius: '10px',
      backgroundColor: 'lightgrey',
      height,
      width,
      padding: '1em',
    },
    defaultItemHover: {
      textAlign: 'center',
      borderRadius: '10px',
      backgroundColor: 'darkgrey',
      height,
      width,
      padding: '1em',
    },
    buttonNoStyle: {
      border: 'none',
      backgroundColor: 'white',
    },
  };
  return (
    <button style={styles.buttonNoStyle} onClick={onClick}>
      <div
        style={hover ? styles.defaultItemHover : styles.defaultItemStyle}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
      >
        {children}
      </div>
    </button>
  );
};

export default Item;
