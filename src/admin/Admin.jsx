import React, { useState } from "react";
import "../admin/StyleAdmin.css";
import PostNewPrev from "../service/axios/PostNewPrev";

const Admin = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");

  const handleFirstName = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastName = (event) => {
    setLastName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    PostNewPrev({setFirstName, setLastName})
  }
  return (
    <form className="form-newprev">
      <div className="new-prev">
        <h2 className="title-new-prev">Nouveau Préventeur</h2>
        <input
          type="text"
          value={firstname}
          className="input-firstname"
          name="text"
          placeholder="Nom"
          onChange={handleFirstName}
        />
        <input
          type="text"
          value={lastname}
          className="input-lastname"
          name="text"
          placeholder="Prénom"
          onChange={handleLastName}
        />
        <button type="submit" onClick={handleSubmit}>
          Ajouter
        </button>
      </div>
    </form>
    /*map à appliquer Axios.get
        <div className="preventer-list">
            <h3>Les Préventeurs</h3>
        </div>*/
  );
};

export default Admin;
