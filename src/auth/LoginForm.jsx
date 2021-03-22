import React, { useState } from "react";
import logovinci from "../image/VCF couleur.jpg"


const LoginForm = ({ Login, error }) => {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    Login(details);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-inner">
      <img className="logo-auth" src={logovinci} alt="" />
        <h2>Identification</h2>
        {error !== "" ? <div className="error">{error}</div> : ""}
        <div className="form-group">
          <label htmlFor="name">Prénom :</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
            value={details.name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">E-mail :</label>
          <input
            type="text"
            email="email"
            id="email"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mot de Passe :</label>
          <input
            type="password"
            password="password"
            id="password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
        </div>
        <input type="submit" value="LOGIN" />
      </div>
    </form>
  );
};

export default LoginForm;
