/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-underscore-dangle */
import React, { useContext, useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { FcUpload } from 'react-icons/fc';
import { singleFileUpload, getSingleFiles } from '../data/uploadImg';
import ContextCard from '../service/CardContext';
import './StyleCards.css';
import 'react-circular-progressbar/dist/styles.css';

// le composant Cards est relié à un preventeur, et indique les données en fonction du préventeur,
// ils sont affichés dans la page principale et du composant VinciHome
// l'upload d'image est également présent dans le composant Card

const Cards = () => {
  const { prevName } = useContext(ContextCard);
  const { firstname, lastname } = prevName;

  const [singleFile, setSingleFile] = useState('');
  const [viewFile, setViewFile] = useState([]);
  const [singleProgress, setSingleProgress] = useState(0);

  const singleFileChange = (e) => {
    setSingleFile(e.target.files[0]);
    setSingleProgress(0);
  };

  const singleFileOptions = {
    onUploadProgress: (progressEvent) => {
      const { loaded, total } = progressEvent;
      const percentage = Math.floor(((loaded / 1000) * 100) / (total / 1000));
      setSingleProgress(percentage);
    },
  };
  const uploadSingleFile = async () => {
    const formData = new FormData();
    formData.append('photo', singleFile);
    await singleFileUpload(formData, singleFileOptions);
    window.location.reload();
  };

  const viewSingleFiles = async () => {
    try {
      const viewfile = await getSingleFiles();
      setViewFile(viewfile);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    viewSingleFiles();
  }, []);

  return (
    <div className="card-container">
      <h2 className="welcome-title">Informations Préventeurs</h2>
      <div className="progress-image-block">
        {viewFile.map((file) => (
          <img
            className="profile-img"
            src={`http://localhost:8000/${file.filePath}`}
            alt="img"
          />
        ))}
        <div className="progress_bar">
          <CircularProgressbar
            className="progress-bar-img"
            value={singleProgress}
            text={`${singleProgress}%`}
            styles={buildStyles({
              rotation: 0.25,
              strokeLinecap: 'butt',
              textSize: '16px',
              pathTransitionDuration: 0.5,
              pathColor: `rgba(255, 136, 136, ${singleProgress / 100})`,
              textColor: '#004489',
              trailColor: '#d6d6d6',
              backgroundColor: '#004489',
            })}
          />
          <input
            key="photo"
            type="file"
            className="input-prev-img"
            onChange={(e) => singleFileChange(e)}
          />
          <FcUpload
            size={30}
            type="button"
            className="button-upload-img"
            onClick={() => uploadSingleFile()}
          />
        </div>
      </div>
      <div className="card-prev">
        {prevName.map((key) => (
          <div className="card-style">
            <div
              key={key._id}
              value={(firstname, lastname)}
              className="card-container"
            >
              <h3 className="person">
                <span>{key.firstname}</span>
                <span>{key.lastname.toUpperCase()}</span>
              </h3>
              <h4 className="title">Demi journée travaillées :</h4>
              <div className="objectif-section">
                <h5 className="objectif-title">Objectif :</h5>
                <p className="color1">Aléas :</p>
                <p className="color2">Actions Terrain :</p>
                <p className="color3">Actions Agence :</p>
              </div>
              <div className="realise-section">
                <h5 className="realise-title">Réalisé :</h5>
                <p className="color1">Aléas :</p>
                <p className="color2">Actions Terrain :</p>
                <p className="color3">Actions Agence :</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
