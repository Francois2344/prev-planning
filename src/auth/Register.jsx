import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../service/AuthContext';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVerify, setPasswordVerify] = useState('');

  const { getLoggedIn } = useContext(AuthContext);
  const history = useHistory();

  async function register(e) {
    e.preventDefault();
    try {
      const registerData = {
        email,
        password,
        passwordVerify,
      };
      await axios.post('http://localhost:8000/register', registerData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      getLoggedIn();
      history.push('/');
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="register">
      <h2>Enregistrement dun nouvel Administrateur</h2>
      <form className="register-form" onSubmit={register}>
        <input
          className="reg-email"
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="reg-password"
          type="password"
          placeholder="Mot de Passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          className="reg-password-verif"
          type="password"
          placeholder="Verification du Mot de Passe"
          value={passwordVerify}
          onChange={(e) => setPasswordVerify(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;