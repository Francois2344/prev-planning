import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import TablePrev from './view/TablePrev';
import Header from './components/Header';
import Cards from './components/Cards';
import Container from './components/Container';
import Context from './service/PrevContext';

const App = () => {
  const [prevName, setPrevName] = useState();

  useEffect(() => {
    const urlGetPrev = 'http://localhost:8000/users';
    axios.get(urlGetPrev).then((response) => {
      setPrevName(response.data);
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Container>
        <Context.Provider value={{ prevName }}>
          {prevName && <TablePrev />}
        </Context.Provider>
        <Cards />
      </Container>
    </div>
  );
};

export default App;
