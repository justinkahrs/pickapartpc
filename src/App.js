import React, {Component} from 'react';
import './App.css';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Button from './components/Button';

import _ from 'lodash/';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gpu: 3,
    }
  }

  render() {
    return (
      <div>
        <div className="App">
          <h1>Pick a Part PC</h1>
          <hr/>
          <div className="case">
            <div className="cpu"/>
            {_.times(this.state.gpu, String).map(() => <div className="gpu"/>)}
          </div>
        </div>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>

          <Button/>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
