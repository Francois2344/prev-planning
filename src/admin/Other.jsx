/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ImBin, ImBoxAdd } from 'react-icons/im';
import beachchair from '../image/beach-chair.png';

const Other = () => {
  const [otherName, setOtherName] = useState('');
  const [otherList, setOtherList] = useState([]);
  const [othName, setOthName] = useState('');

  const handleChangeOther = (event) => {
    setOtherName(event.target.value);
  };

  const handleChangeOthName = (event) => {
    setOthName(event.target.value);
  };

  useEffect(() => {
    const urlOther = 'http://localhost:8000/others';
    axios.get(urlOther).then((response) => {
      setOtherList(response.data);
    });
  }, []);

  const handleAddOther = (event) => {
    event.preventDefault();
    const postUrl = 'http://localhost:8000/others/add';
    axios
      .post(
        postUrl,
        {
          otherName: othName,
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

  const deleteOther = () => {
    const removeIdOther = otherList.find(
      (item) => item.otherName === otherName
    );
    const urlDelete = `http://localhost:8000/others/${removeIdOther._id}`;
    axios.delete(urlDelete).then((response) => response.data);
    window.location.reload().catch((error) => console.error(error));
  };

  return (
    <div className="input-select">
      <h3 className="other-title">Autres</h3>
      <div className="icon-office-action">
        <img
          className="icon-office"
          src={beachchair}
          alt="icon-action-agence"
        />
      </div>
      <form className="form-admin">
        <div className="form-admin-input">
          <select
            onChange={handleChangeOther}
            name="Autres"
            className="other-select"
            value={otherName}
          >
            {otherList.map((val) => {
              return <option key={val._id}>{val.otherName}</option>;
            })}
          </select>
          <input
            className="add-input"
            type="text"
            name="text"
            value={othName}
            onChange={handleChangeOthName}
          />
          <div className="icon-post-delete">
            <ImBoxAdd
              size={30}
              color="#14DB03"
              className="post-input"
              type="submit"
              onClick={handleAddOther}
            >
              Ajouter
            </ImBoxAdd>
            <ImBin
              size={30}
              color="#D00303"
              className="delete-input"
              type="button"
              onClick={deleteOther}
            >
              Supprimer
            </ImBin>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Other;
