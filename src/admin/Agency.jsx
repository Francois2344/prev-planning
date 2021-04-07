/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Agency = () => {
  const [agencyName, setAgencyName] = useState('');
  const [agencyList, setAgencyList] = useState([]);
  const [agName, setAgName] = useState('');

  const handleChangeAgency = (event) => {
    setAgencyName(event.target.value);
  };

  const handleChangeAgName = (event) => {
    setAgName(event.target.value);
  };

  useEffect(() => {
    const urlAgency = 'http://localhost:8000/agencies';
    axios.get(urlAgency).then((response) => {
      setAgencyList(response.data);
    });
  }, []);

  const handleAddAgency = (event) => {
    event.preventDefault();
    const postUrl = 'http://localhost:8000/hazards/add';
    axios
      .post(
        postUrl,
        {
          agencyName: agName,
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

  const deleteAgency = () => {
    const removeIdAg = agencyList.find(
      (item) => item.agencyName === agencyName
    );
    const urlDelete = `http://localhost:8000/agencies/${removeIdAg._id}`;
    axios.delete(urlDelete).then((response) => response.data);
    window.location.reload().catch((error) => console.error(error));
  };

  return (
    <div className="input-select">
      <h3 className="agency-title">Actions Agence</h3>
      <form className="form-agency">
        <div className="form-agency-input">
          <select
            onChange={handleChangeAgency}
            name="Action Agence"
            className="agency-select"
            value={agencyName}
          >
            {agencyList.map((val) => {
              return <option key={val._id}>{val.agencyName}</option>;
            })}
          </select>
          <input
            className="add-agency"
            type="text"
            name="text"
            value={agName}
            onChange={handleChangeAgName}
          />
          <button
            className="post-agency"
            type="submit"
            onClick={handleAddAgency}
          >
            Ajouter
          </button>
          <button
            className="delete-agency"
            type="button"
            onClick={deleteAgency}
          >
            Supprimer
          </button>
        </div>
      </form>
    </div>
  );
};

export default Agency;
