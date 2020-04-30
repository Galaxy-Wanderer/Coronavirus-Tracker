import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Search from './components/Search';
import All from './components/All';
import Header from './components/Header';

// all cases api:https://coronavirus-19-api.herokuapp.com/all
// country cases:https://coronavirus-19-api.herokuapp.com/countries

function App() {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Search} />
          <Route exact path='/all' component={All} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
