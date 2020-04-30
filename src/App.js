import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Search from './components/Search';
import All from './components/All';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path='/' component={Search} />
          <Route exact path='/all' component={All} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
