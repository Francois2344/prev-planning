import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { FcSettings, FcHome } from 'react-icons/fc';
import Admin from '../admin/Admin';
import Auth from '../auth/Auth';
import logovinci from '../image/VCF blanc.jpg';

const HEADER = styled.div`
  font-family: Baloo;
  font-style: normal;
  font-weight: normal;
  font-size: 100%;
  text-align: start;
  color: #5cbed3;

  .main-title {
    margin-left: 5rem;
  }

  .icon-link {
    margin-left: auto;
  }

  .icon-link-setting {
    height: 5.8em;
  }

  .icon-home {
    margin-left: 53em;
  }

  .icon-link-home {
    height: 5.8em;
  }

  .head-display {
    display: flex;
    justify-content: space-between;
  }

  .logo-header {
    height: 100px;
    width: 350px;
    margin: 0;
    padding: 20px;
  }

  .main-line {
    display: flex;
    justify-content: space-between;
    margin: 0;
  }

  .first-line {
    width: 70%;
    height: 15px;
    background-color: #1a3478;
    margin-bottom: 20px;
    float: left;
    border-radius: 5px;
  }
  .second-line {
    width: 29%;
    height: 15px;
    background-color: #5cbed3;
    float: right;
    border-radius: 5px;
  }
`;

const Header = () => {
  return (
    <Router>
      <HEADER>
        <div className="head-display">
          <h1 className="main-title">Pilotage Prévention</h1>
          <div className="icon-home">
            <Link to="/">
              <FcHome className="icon-link-home" size={40} />
            </Link>
          </div>
          <div className="icon-link">
            <Link to="/admin">
              <FcSettings className="icon-link-setting" size={40} />
            </Link>
          </div>
          <img className="logo-header" src={logovinci} alt="" />
        </div>
        <div className="main-line">
          <div className="first-line" />
          <div className="second-line" />
        </div>
        <Switch>
          <Route path="/" />
          <Route path="/admin" components={Admin} />
          <Route path="/auth" component={Auth} />
        </Switch>
      </HEADER>
    </Router>
  );
};

export default Header;
