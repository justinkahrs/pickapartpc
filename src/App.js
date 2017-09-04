import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';
import Navigation from './components/navigation';
import Build from './pages/Build';
import Home from './pages/Home';
import Contact from './pages/Contact';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
    <Router basename={this.props.path}>
      <div>
        <Navigation />
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/build" component={Build}/>
            <Route path="/contact" component={Contact}/>
            <Route render={() => <h1>Page Not Found</h1>}/>
          </Switch>
        </div>
      </div>
    </Router>
    )
  }
};

export default App