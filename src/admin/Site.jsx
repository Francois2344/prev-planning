/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ImBin, ImBoxAdd } from 'react-icons/im';
import construction from '../image/construction.png';

// Composant Action Terrain, permet d'ajouter ou de supprimer une action via l'appel d'API

const Site = () => {
  const [siteName, setSiteName] = useState('');
  const [siteList, setSiteList] = useState([]);
  const [fieldName, setFieldName] = useState('');

  const handleChangeSite = (event) => {
    setSiteName(event.target.value);
  };

  const handleChangeFieldName = (event) => {
    setFieldName(event.target.value);
  };

  useEffect(() => {
    const urlSite = 'http://localhost:8000/sites';
    axios.get(urlSite).then((response) => {
      setSiteList(response.data);
    });
  }, []);

  const handleAddSite = (event) => {
    event.preventDefault();
    const postUrl = 'http://localhost:8000/sites/add';
    axios
      .post(
        postUrl,
        {
          siteName: fieldName,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        window.location.reload();
      })
      .catch((error) => console.error(error));
  };

  const deleteSite = () => {
    const removeIdSite = siteList.find((item) => item.siteName === siteName);
    const urlDelete = `http://localhost:8000/sites/${removeIdSite._id}`;
    axios.delete(urlDelete).then((response) => response.data);
    window.location.reload().catch((error) => console.error(error));
  };

  return (
    <div className="input-select">
      <h3 className="site-title">Actions Terrain</h3>
      <div className="icon-office-action">
        <img
          className="icon-office"
          src={construction}
          alt="icon-action-agence"
        />
      </div>
      <form className="form-admin">
        <div className="form-admin-input">
          <select
            onChange={handleChangeSite}
            name="Action Terrain"
            className="site-select"
            value={siteName}
          >
            {siteList.map((val) => {
              return <option key={val._id}>{val.siteName}</option>;
            })}
          </select>
          <input
            className="add-input"
            type="text"
            name="text"
            value={fieldName}
            onChange={handleChangeFieldName}
          />
          <div className="icon-post-delete">
            <ImBoxAdd
              size={30}
              color="#14DB03"
              className="post-input"
              type="submit"
              onClick={handleAddSite}
            >
              Ajouter
            </ImBoxAdd>
            <ImBin
              size={30}
              color="#D00303"
              className="delete-input"
              type="button"
              onClick={deleteSite}
            >
              Supprimer
            </ImBin>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Site;
