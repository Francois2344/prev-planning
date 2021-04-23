import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Container from './Layout/Container';
import LoginForm from './auth/LoginForm';
import VinciHome from './view/VinciHome';
import MainTable from './view/MainTable';
import Admin from './admin/Admin';
import Register from './auth/Register';
import AuthContext from './service/AuthContext';

const Router = () => {
  const { loggedIn } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Container />
      <Switch>
        <Route exact path="/">
          <VinciHome />
        </Route>
        <Route path="/table">
          <MainTable />
        </Route>
        {loggedIn === false && (
          <>
            <Route path="/login">
              <LoginForm />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
          </>
        )}
        {loggedIn === true && (
          <>
            <Route path="/admin">
              <Admin />
            </Route>
          </>
        )}
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
