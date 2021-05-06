/* eslint-disable no-underscore-dangle */
import React, { useContext } from 'react';
import avatar1 from '../image/avatar-1.png';
import ContextCard from '../service/CardContext';
import './StyleCards.css';

const Cards = () => {
  const { prevName } = useContext(ContextCard);
  const { firstname, lastname } = prevName;

  return (
    <div className="card-container">
      <h2 className="welcome-title">Informations Préventeurs</h2>
      <div className="card-prev">
        {prevName.map((key) => (
          <div className="card-style">
            <div
              key={key._id}
              value={(firstname, lastname)}
              className="card-container"
            >
              <h3 className="person">
                <span>{key.firstname}</span>
                <span>{key.lastname}</span>
              </h3>
              <div className="picture">
                <img className="profile" src={avatar1} alt="" />
              </div>
              <h4 className="title">Demi journée travaillées:</h4>
              <div className="objectif-section">
                <h5 className="objectif-title">Objectif:</h5>
                <p className="color1">Aléas:</p>
                <p className="color2">Actions Terrain:</p>
                <p className="color3">Actions Agence:</p>
              </div>
              <div className="realise-section">
                <h5 className="realise-title">Réalisé:</h5>
                <p className="color1">Aléas:</p>
                <p className="color2">Actions Terrain:</p>
                <p className="color3">Actions Agence:</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
