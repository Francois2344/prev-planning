import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Context from '../service/PrevContext';
import TablePrev from '../components/TablePrev';

const MainTable = () => {
  const [prevName, setPrevName] = useState();

  useEffect(() => {
    const urlGetPrev = 'http://localhost:8000/users';
    axios.get(urlGetPrev).then((response) => {
      setPrevName(response.data);
    });
  }, []);
  return (
    <div className="Main-Table">
      <Context.Provider value={{ prevName }}>
        {prevName && <TablePrev />}
      </Context.Provider>
    </div>
  );
};

export default MainTable;
