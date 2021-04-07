/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Hazard = () => {
  const [hazardName, setHazardName] = useState('');
  const [hazardList, setHazardList] = useState([]);
  const [aleasName, setAleasName] = useState('');

  const handleChangeHazard = (event) => {
    setHazardName(event.target.value);
  };

  const handleChangeAlesName = (event) => {
    setAleasName(event.target.value);
  };

  useEffect(() => {
    const urlHazard = 'http://localhost:8000/hazards';
    axios.get(urlHazard).then((response) => {
      setHazardList(response.data);
    });
  }, []);

  const handleAddHazard = (event) => {
    event.preventDefault();
    const postUrl = 'http://localhost:8000/hazards/add';
    axios
      .post(
        postUrl,
        {
          hazardName: aleasName,
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

  const deleteHazard = () => {
    const removeId = hazardList.find((item) => item.hazardName === hazardName);
    const urlDelete = `http://localhost:8000/hazards/${removeId._id}`;
    axios.delete(urlDelete).then((response) => response.data);
    window.location.reload().catch((error) => console.error(error));
  };

  return (
    <div className="input-select">
      <h3 className="hazard-title">Aléas</h3>
      <form className="form-admin">
        <div className="form-admin-input">
          <select
            onChange={handleChangeHazard}
            name="Aléas"
            className="aleas-select"
            value={hazardName}
          >
            {hazardList.map((val) => {
              return <option key={val._id}>{val.hazardName}</option>;
            })}
          </select>
          <input
            className="add-input"
            type="text"
            name="text"
            value={aleasName}
            onChange={handleChangeAlesName}
          />
          <button
            className="post-input"
            type="submit"
            onClick={handleAddHazard}
          >
            Ajouter
          </button>
          <button className="delete-input" type="button" onClick={deleteHazard}>
            Supprimer
          </button>
        </div>
      </form>
    </div>
  );
};

export default Hazard;
