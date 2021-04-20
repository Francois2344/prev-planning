import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Context from '../service/PrevContext';
import TablePrev from '../components/TablePrev';

const Home = () => {
  const [prevName, setPrevName] = useState();

  useEffect(() => {
    const urlGetPrev = 'http://localhost:8000/users';
    axios.get(urlGetPrev).then((response) => {
      setPrevName(response.data);
    });
  }, []);
  console.log(prevName);
  return (
    <div className="App">
      <Context.Provider value={{ prevName }}>
        {prevName && <TablePrev />}
      </Context.Provider>
    </div>
  );
};

export default Home;
