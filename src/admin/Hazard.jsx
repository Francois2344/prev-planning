/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Hazard = () => {
  const [hazardName, setHazardName] = useState('');
  const [hazardList, setHazardList] = useState([]);

  const handleChangeHazard = (event) => {
    setHazardName(event.target.value);
  };

  useEffect(() => {
    const urlHazard = 'http://localhost:8000/hazards';
    axios.get(urlHazard).then((response) => {
      setHazardList(response.data);
    });
  }, []);

  const handleAddHazard = (event) => {
    event.preventDefault();
    const postHazard = 'http://localhost:8000/hazards/add';
    axios
      .post(
        postHazard,
        {
          hazardName,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="input-select">
      <h3 className="hazard-title">Aléas</h3>
      <form className="form-hazard">
        <div>
          <input
            className="add-hazard"
            type="text"
            name="text"
            value={hazardName}
          />
          <button
            className="post-hazard"
            type="button"
            onClick={handleAddHazard}
          >
            Ajouter
          </button>
        </div>
        <select
          onChange={handleChangeHazard}
          name="Aléas"
          className="aleas-select"
          value={hazardName}
        >
          {hazardList.map((val) => (
            <option value={val}>{val.hazardName}</option>
          ))}
        </select>
      </form>
    </div>
  );
};

export default Hazard;
