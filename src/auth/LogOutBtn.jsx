import axios from 'axios';
import React, { useContext } from 'react';
import { GrLogout } from 'react-icons/gr';
import { useHistory } from 'react-router-dom';
import AuthContext from '../service/AuthContext';

const LogOutBtn = () => {
  const { getLoggedIn } = useContext(AuthContext);
  const history = useHistory();

  const logOut = async () => {
    await axios.get('http://localhost:8000/register/logout');
    await getLoggedIn();
    history.push('/');
  };
  return (
    <GrLogout type="submit" onClick={logOut} size={40}>
      Deconnexion
    </GrLogout>
  );
};

export default LogOutBtn;
