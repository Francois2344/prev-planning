import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from './auth/Auth';
import Container from './Layout/Container';
import VinciHome from './view/VinciHome';
import MainTable from './view/MainTable';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Container />
      </div>
      <Switch>
        <Route path="/table" component={MainTable} />
        <Route path="/auth" component={Auth} />
        <Route path="/" component={VinciHome} />
      </Switch>
    </Router>
  );
};

export default App;
