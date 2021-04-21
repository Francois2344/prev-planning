import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FcSettings, FcHome } from 'react-icons/fc';
import { BsTable } from 'react-icons/bs';
// eslint-disable-next-line no-unused-vars
import Admin from '../admin/Admin';

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
  .nav-icon {
    display: flex;
    justify-content: center;
    padding: 20px;
  }
  .icon-home {
    margin-right: 10px;
  }
  .icon-table {
    margin-right: 10px;
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
    <HEADER>
      <div className="head-display">
        <h1 className="main-title">Pilotage Prévention</h1>
        <div className="nav-icon">
          <div className="icon-home">
            <Link to="/">
              <FcHome className="icon-link-home" size={40} />
            </Link>
          </div>
          <div className="icon-table">
            <Link to="table">
              <BsTable className="icon-link-table" size={40} />
            </Link>
          </div>
          <div className="icon-link">
            <Link to="/auth">
              <FcSettings className="icon-link-setting" size={40} />
            </Link>
          </div>
        </div>
        <img className="logo-header" src={logovinci} alt="" />
      </div>
      <div className="main-line">
        <div className="first-line" />
        <div className="second-line" />
      </div>
    </HEADER>
  );
};

export default Header;
