import * as React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
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
              I'm not sure where you're trying to go, but it doesn't exist.
            </PageContainer>
          )}
        />
      </Switch>
    </div>
  </Router>
);
export default App;
