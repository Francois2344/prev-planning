import axios from 'axios';
import React, { useContext } from 'react';
import { FcImport } from 'react-icons/fc';
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
    <FcImport type="submit" onClick={logOut} size={40}>
      Deconnexion
    </FcImport>
  );
};

export default LogOutBtn;
