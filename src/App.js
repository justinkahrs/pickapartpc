import React, {Component} from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import AppBarMenu from './components/AppBarMenu';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Computer from './components/computer/Computer';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
      gpu: 5,
      selectedGpu: 0,
    };
    this.clickMenu = this.clickMenu.bind(this);
    this.clickGPU = this.clickGPU.bind(this);
  }

  clickMenu() {
    this.setState({
      showMenu: !this.state.showMenu,
    })
  }

  clickGPU(value) {
    this.setState({
      selectedGpu: value,
    })
  }
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div className="App">
          <AppBar title="Pick a Part PC"
                  onLeftIconButtonTouchTap={this.clickMenu}
          />
            <AppBarMenu open={this.state.showMenu} onRequestClose={this.clickMenu} />
              <Computer gpu={1} />
            <label>Number of GPUs</label>
            <SelectField>
              <MenuItem>1</MenuItem>
              <MenuItem>2</MenuItem>
            </SelectField>

          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
