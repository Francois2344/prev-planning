/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FcSettings, FcHome, FcKey } from 'react-icons/fc';
import { BsTable } from 'react-icons/bs';
import { IoPersonAdd } from 'react-icons/io5';
import { SiPowerbi } from 'react-icons/si';
import logovinci from '../image/VCF blanc.jpg';
import AuthContext from '../service/AuthContext';
import LogOutBtn from '../auth/LogOutBtn';
import './StyleHeader.css';

// Header avec la naviguation, rappel du context pour l'authentification

const Header = () => {
  const { loggedIn } = useContext(AuthContext);

  return (
    <div className="main-header">
      <div className="head-display">
        <h1 className="main-title">Pilotage Prévention</h1>
        <div className="nav-icon">
          <Link to="/">
            <FcHome className="icon-link-home" size={30} />
          </Link>
          <Link to="/powerbi">
            <SiPowerbi className="icon-link-powerbi" size={30} color="orange" />
          </Link>
          <Link to="table">
            <BsTable className="icon-link-table" size={30} color="004489" />
          </Link>
          {loggedIn === false && (
            <>
              <Link to="/login">
                <FcSettings className="icon-link-login" size={30} />
              </Link>
              <Link to="/register">
                <IoPersonAdd
                  className="icon-link-register"
                  size={30}
                  color="D51313"
                />
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
    </div>
  );
};

export default Header;
