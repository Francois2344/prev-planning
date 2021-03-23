import React, { useState } from "react";

const Admin = () => {
  const [newPrev, setNewPrev] = useState({ firstname: "", lastname: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    //Axios.post
  };
  return (
    <form>
      <div className="form-new-prev">
        <h2 className="title-new-prev">Nouveau Préventeur</h2>
        <input
          type="text"
          value={newPrev.firstname}
          className="input-firstname"
          name="text"
          placeholder="Nom"
          onChange={(e) =>setNewPrev ({...newPrev, firstname:e.target.value})}
        />
        <input
          type="text"
          value={newPrev.lastname}
          className="input-lastname"
          name="text"
          placeholder="Prénom"
          onChange={(e) =>setNewPrev ({...newPrev, lastname:e.target.value})}
        />
        <button type="submit" onClick={handleSubmit}>Ajouter</button>
      </div>
    </form>
    /*map à appliquer Axios.get
        <div className="preventer-list">
            <h3>Les Préventeurs</h3>
        </div>*/
  );
};

export default Admin;
