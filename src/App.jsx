import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from './auth/Auth';
import Container from './Layout/Container';
import VinciHome from './view/VinciHome';
import Home from './view/MainTable';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Container />
      </div>
      <Switch>
        <Route exact path="/home" component={VinciHome} />
        <Route path="/auth" component={Auth} />
        <Route path="/table" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
