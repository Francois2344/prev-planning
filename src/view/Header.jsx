/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FcSettings, FcHome, FcKey } from 'react-icons/fc';
import { BsTable } from 'react-icons/bs';
import { IoPersonAdd } from 'react-icons/io5';
import logovinci from '../image/VCF blanc.jpg';
import AuthContext from '../service/AuthContext';
import LogOutBtn from '../auth/LogOutBtn';

const HEADER = styled.div`
  font-family: Baloo;
  font-style: normal;
  font-weight: normal;
  text-align: start;
  color: #189fd6;

  .main-title {
    margin: auto;
    font-size: 1em;
    margin-left: 10px;
  }

  .head-display {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .logo-header {
    height: 40px;
    width: 130px;
    margin: auto;
  }
  .main-line {
    display: flex;
    justify-content: space-between;
    margin: 0;
  }
  .nav-icon {
    padding: 20px;
  }
  .first-line {
    width: 70%;
    height: 15px;
    background-color: #004489;
    margin-bottom: 20px;
    float: left;
    border-radius: 5px;
    margin-left: 10px;
  }
  .second-line {
    width: 28%;
    height: 15px;
    background-color: #189fd6;
    float: right;
    border-radius: 5px;
    margin-right: 10px;
  }

  @media screen and (min-width: 768px) {
    .logo-header {
      height: 120px;
      width: 330px;
      margin: 0em;
      padding: 20px;
    }
    .nav-icon {
      display: flex;
      margin: auto;
    }
    .icon-link-home {
      margin-right: 30px;
    }
    .icon-link-table {
      margin-right: 30px;
    }
    .icon-link-login {
      margin-right: 30px;
    }
    .icon-link-register {
      margin-right: 30px;
    }
    .icon-link-logout {
      margin-right: 30px;
      color: #189fd6;
    }
    .main-title {
      margin-top: 30px;
      font-weight: bold;
      font-size: 3em;
    }
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
            <FcHome className="icon-link-home" size={30} />
          </Link>
          <Link to="table">
            <BsTable className="icon-link-table" size={30} />
          </Link>
          {loggedIn === false && (
            <>
              <Link to="/login">
                <FcSettings className="icon-link-login" size={30} />
              </Link>
              <Link to="/register">
                <IoPersonAdd className="icon-link-register" size={30} />
              </Link>
            </>
          )}
          {loggedIn === true && (
            <>
              <Link to="/admin">
                <FcKey className="icon-link-logout" size={40} />
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
