/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FcSettings, FcHome } from 'react-icons/fc';
import { BsTable } from 'react-icons/bs';
import { GrUserAdmin } from 'react-icons/gr';
import { IoPersonAdd } from 'react-icons/io5';
// eslint-disable-next-line no-unused-vars
import Admin from '../admin/Admin';

import logovinci from '../image/VCF blanc.jpg';
import AuthContext from '../service/AuthContext';
import LogOutBtn from '../auth/LogOutBtn';

const HEADER = styled.div`
  font-family: Baloo;
  font-style: normal;
  font-weight: normal;
  text-align: start;
  color: #5cbed3;

  .main-title {
    margin-top: 15px;
  }

  .head-display {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .logo-header {
    height: 100px;
    width: 150px;
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
  const { loggedIn } = useContext(AuthContext);

  return (
    <HEADER>
      <div className="head-display">
        <h1 className="main-title">Pilotage Prévention</h1>
        <div className="nav-icon">
          <Link to="/">
            <FcHome className="icon-link-home" size={40} />
          </Link>
          <Link to="table">
            <BsTable className="icon-link-table" size={40} />
          </Link>
          {loggedIn === false && (
            <>
              <Link to="/login">
                <FcSettings className="icon-link-login" size={40} />
              </Link>
              <Link to="/register">
                <IoPersonAdd className="icon-link-register" size={40} />
              </Link>
            </>
          )}
          {loggedIn === true && (
            <>
              <Link to="/admin">
                <GrUserAdmin className="icon-link-home" size={40} />
              </Link>
              <LogOutBtn />
            </>
          )}
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
