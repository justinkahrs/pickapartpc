import * as React from 'react';

const Item = ({
  defaultStyle,
  defaultHover,
  height,
  hover,
  onClick,
  toggleHover,
  width,
  children,
}) => {
  const styles = {
    defaultStyle: defaultStyle || {
      textAlign: 'center',
      borderRadius: '10px',
      backgroundColor: 'lightgrey',
      height,
      width,
      padding: '1em',
    },
    defaultHover: defaultHover || {
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
        style={hover ? styles.defaultHover : styles.defaultStyle}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
      >
        {children}
      </div>
    </button>
  );
};

export default Item;
