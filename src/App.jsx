/* eslint-disable import/no-duplicates */
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import './App.css';
import { AuthContextProvider } from './service/AuthContext';
import Router from './Router';

axios.defaults.withCredentials = true;

const App = () => {
  toast.configure();

  return (
    <div>
      <AuthContextProvider>
        <Router />
        <ToastContainer position="top-center" autoClose={2000} />
      </AuthContextProvider>
    </div>
  );
};

export default App;
