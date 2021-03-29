import React, { useState } from 'react';
import LoginForm from './LoginForm';
import './StyleAuth.css';

const Auth = () => {
  const adminUser = {
    email: 'admin@admin.com',
    password: 'admin123',
  };

  const [user, setUser] = useState({ name: '', email: '' });
  const [error, setError] = useState('');

  const Login = (details) => {
    console.log(details);
    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    ) {
      console.log('Logged In');
      setUser({ name: details.name, email: details.email });
    } else {
      console.log('try again');
      setError('try again');
    }
  };

  // eslint-disable-next-line no-unused-vars
  const Logout = () => {
    console.log('Logout');
    setUser({
      name: '',
      email: '',
    });
  };

  return (
    <div className="auth">
      {user.email !== '' ? (
        <div className="welcome">
          <h2>
            Bienvenue,
            <span>{user.name}</span>
          </h2>
          <button type="submit">Deconnexion</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
};

export default Auth;
