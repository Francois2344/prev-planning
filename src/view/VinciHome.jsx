import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cards from '../components/Cards';
import ContextCard from '../service/CardContext';

// Page d'accueil avec les cards

const VinciHome = () => {
  const [prevName, setPrevName] = useState();

  useEffect(() => {
    const urlGetPrev = 'http://localhost:8000/users';
    axios.get(urlGetPrev).then((response) => {
      setPrevName(response.data);
    });
  }, []);
  return (
    <div className="welcome-page">
      <ContextCard.Provider value={{ prevName }}>
        {prevName && <Cards />}
      </ContextCard.Provider>
    </div>
  );
};

export default VinciHome;
