import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Cards from '../components/Cards';
import ContextCard from '../service/CardContext';

const DIV = styled.div`
  .welcome-title {
    text-align: center;
    margin: 10px;
    font-weight: bold;
  }
`;
const VinciHome = () => {
  const [prevName, setPrevName] = useState();

  useEffect(() => {
    const urlGetPrev = 'http://localhost:8000/users';
    axios.get(urlGetPrev).then((response) => {
      setPrevName(response.data);
    });
  }, []);
  return (
    <DIV className="welcome-page">
      <h2 className="welcome-title">Informations Préventeurs</h2>
      <ContextCard.Provider value={{ prevName }}>
        {prevName && <Cards />}
      </ContextCard.Provider>
    </DIV>
  );
};

export default VinciHome;
