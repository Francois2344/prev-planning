/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [loggedIn, setLoggedIn] = useState(undefined);

  async function getLoggedIn() {
    const loggedInRes = await axios.get(
      'http://localhost:8000/register/loggedIn'
    );
    setLoggedIn(loggedInRes.data);
  }

  useEffect(() => {
    getLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ loggedIn, getLoggedIn }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
export { AuthContextProvider };
