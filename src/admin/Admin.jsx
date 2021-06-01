/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { ImBin } from 'react-icons/im';
import axios from 'axios';
import Head from './Head';
import Hazard from './Hazard';
import Agency from './Agency';
import Site from './Site';
import Other from './Other';
import './AdminStyle.css';

// Page administrateur, affiche les composants pour la partie administration

const Admin = () => {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [listPrev, setListPrev] = useState([]);

  const handleFirstName = (event) => {
    setFirstName(event.target.value);
  };
  const handleLastName = (event) => {
    setLastName(event.target.value);
  };

  useEffect(() => {
    const urlGet = 'http://localhost:8000/users';
    axios.get(urlGet).then((response) => {
      setListPrev(response.data);
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const urlPost = 'http://localhost:8000/users/add';
    axios
      .post(
        urlPost,
        {
          firstname,
          lastname,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((response) => {
        window.location.reload();
        console.log(response.data);
      })
      .catch((error) => console.error(error));
  };

  const deletePreventer = (id) => {
    const url = 'http://localhost:8000/users/';
    axios
      .delete(url + id)
      .then((response) => response.data, window.location.reload())
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <Head />
      <div className="block-new-prev">
        <form className="form-newprev">
          <div className="new-prev">
            <h2 className="title-new-prev">Nouveau Préventeur</h2>
            <input
              type="text"
              value={firstname}
              className="input-firstname"
              name="text"
              placeholder="Prénom"
              onChange={handleFirstName}
            />
            <input
              type="text"
              value={lastname}
              className="input-lastname"
              name="text"
              placeholder="Nom"
              onChange={handleLastName}
            />
            <button type="submit" onClick={handleSubmit}>
              Ajouter
            </button>
          </div>
        </form>
        <div className="preventer-list">
          <h3>Les Préventeurs</h3>
          {listPrev.map((val) => {
            return (
              <div className="list-prev">
                <div key={val._id} className="list-items">
                  <li className="item-1">{val.firstname}</li>
                  <li className="item-2">{val.lastname}</li>
                </div>
                <div className="remove-button">
                  <ImBin
                    size={20}
                    color="#D00303"
                    type="button"
                    className="delete-prev"
                    onClick={() => deletePreventer(val._id)}
                  >
                    Supprimer
                  </ImBin>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="block-input">
        <Agency />
        <Site />
        <Hazard />
        <Other />
      </div>
    </div>
  );
};

export default Admin;
