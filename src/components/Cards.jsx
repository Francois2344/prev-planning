import React from 'react';
import styled from 'styled-components';
import avatar1 from '../image/avatar-1.png';

const CARD = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  box-shadow: 0 0 12px 3px rgba(0, 0, 0, 0.3);
  border: solid 1px rgba(0, 0, 0, 0.08);

  .profile {
    width: 100px;
    height: 100px;
    margin-top: 25px;
    border-radius: 50%;
    box-shadow: 0 0 12px 3px rgba(0, 0, 0, 0.2);
  }

  .person {
    padding: 10px;
    background-color: #a8a8a8;
    margin: auto;
  }

  h4 {
    display: flex;
    margin: 15px;
  }

  h5 {
    margin: 0px;
  }
  .objectif-title {
    background-color: #49d5e7;
    color: #ffffff;
  }

  .realise-title {
    background-color: #494fe7;
    color: #ffffff;
  }

  .objectif-section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-top: 2px solid #49d5e7;
    text-color: ;
  }
  .realise-section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-top: 2px solid #494fe7;
    text-color: ;
  }

  p {
    padding-left: 20px;
  }

  .color1 {
    margin: 5px;
    color: #fc2ccb;
  }
  .color2 {
    margin: 5px;
    color: #04f117;
  }
  .color3 {
    margin: 5px;
    color: #029c0f;
  }
`;

const Cards = () => {
  return (
    <CARD>
      <div className="card-container">
        <h3 className="person">Nom Prénom</h3>
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
    </CARD>
  );
};

export default Cards;
