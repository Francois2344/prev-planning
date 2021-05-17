import axios from 'axios';
import React, { useContext } from 'react';
import { FcImport } from 'react-icons/fc';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import AuthContext from '../service/AuthContext';

const LogOutBtn = () => {
  const { getLoggedIn } = useContext(AuthContext);
  const history = useHistory();

  const logOut = async () => {
    await axios.get('http://localhost:8000/register/logout');
    await getLoggedIn();
    history.push('/');
    toast.info('Deconnexion');
  };
  return (
    <FcImport type="submit" onClick={logOut} size={40}>
      Deconnexion
    </FcImport>
  );
};

export default LogOutBtn;
