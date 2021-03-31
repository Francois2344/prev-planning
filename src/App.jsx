import React from 'react';
import Admin from './admin/Admin';
import Hazard from './admin/Hazard';
import Head from './admin/Head';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Head />
      <Admin />
      <Hazard />
    </div>
  );
};

export default App;
