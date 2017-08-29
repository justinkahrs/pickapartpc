import React from 'react';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Popover from 'material-ui/Popover';

const AppBarMenu = (props) => (
  <Popover open={props.open} onRequestClose={props.onRequestClose}>
    <Menu>
      <MenuItem>Log in</MenuItem>
      <MenuItem>Start Building</MenuItem>
      <MenuItem>About Us</MenuItem>
    </Menu>
  </Popover>
);
export default AppBarMenu;