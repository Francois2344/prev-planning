/* eslint-disable react/jsx-curly-newline */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useContext } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import logovinci from '../image/VCF couleur.jpg';
import AuthContext from '../service/AuthContext';
import './AuthStyle.css';

// Formulaire d''identification

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { getLoggedIn } = useContext(AuthContext);
  const history = useHistory;

  async function loginAuth(e) {
    e.preventDefault();
    try {
      const loginData = {
        email,
        password,
      };

      await axios.post('http://localhost:8000/register/login', loginData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      getLoggedIn();
      toast.success('Bienvenue');
      history.push('/');
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <form className="login-form" onSubmit={loginAuth}>
      <div className="form-inner">
        <img className="logo-auth" src={logovinci} alt="" />
        <h2 className="title-auth">Identification</h2>
        <div className="form-group">
          <input
            placeholder="E-mail"
            type="text"
            email="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="form-group">
          <input
            placeholder="Mot de Passe"
            type="password"
            password="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <input className="login-button" type="submit" value="LOGIN" />
      </div>
    </form>
  );
};

export default LoginForm;
