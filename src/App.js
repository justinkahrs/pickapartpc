import React, {Component} from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Popover from 'material-ui/Popover';

import _ from 'lodash/';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
      gpu: 1,
    }
    this.showMenu = this.showMenu.bind(this);
  }

  showMenu() {
    this.setState({
      showMenu: !this.state.showMenu,
    })
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div className="App">
          <AppBar title="Pick a Part PC"
                  onLeftIconButtonTouchTap={this.showMenu}
          />
            <Popover open={this.state.showMenu} onRequestClose={this.showMenu}>
              <Menu>
                <MenuItem>Start Building</MenuItem>
                <MenuItem>About Us</MenuItem>
              </Menu>
            </Popover>
              <div className="case">
                <div className="cpu"/>
                {_.times(this.state.gpu, String).map(() => <div className="gpu"/>)}
              </div>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
