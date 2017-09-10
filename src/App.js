// @flow
import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/navigation';
import Build from './pages/Build';
import Home from './pages/Home';
import Contact from './pages/Contact';
import './App.css';

const App = (props: { path: string }) => (
  <Router basename={props.path}>
    <div>
      <Navigation />
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/build" component={Build} />
          <Route path="/contact" component={Contact} />
          <Route render={() => <h1>Page Not Found</h1>} />
        </Switch>
      </div>
    </div>
  </Router>
);
export default App;
