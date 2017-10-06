// @flow
import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/navigation';
import Build from './pages/Build';
import Home from './pages/Home';
import Contact from './pages/Contact';
import PageContainer from './components/common/pageContainer';
import './App.css';

const App = (props: { path: string }) => (
  <Router basename={props.path}>
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/build" component={Build} />
        <Route path="/contact" component={Contact} />
        <Route
          render={() => (
            <PageContainer title="Page Not Found">
              Github client-side routing sucks, so if this is still hosted there, try clicking a nav
              link
            </PageContainer>
          )}
        />
      </Switch>
    </div>
  </Router>
);
export default App;
