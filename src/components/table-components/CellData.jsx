/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const SELECTDATA = styled.select`
  width: 150px;
  height: 30px;
`;

const CellData = () => {
  const [dataAgency, setDataAgency] = useState([]);
  const [dataHazard, setDataHazard] = useState([]);
  const [dataOther, setDataOther] = useState([]);
  const [dataSite, setDataSite] = useState([]);

  const fetchDataOne = async () => {
    const urlHazard = 'http://localhost:8000/hazards';
    await axios.get(urlHazard).then((response) => {
      setDataHazard(response.data);
    });
  };

  const fetchDataTwo = async () => {
    const urlAgencies = 'http://localhost:8000/agencies';
    await axios.get(urlAgencies).then((response) => {
      setDataAgency(response.data);
    });
  };

  const fetchDataThree = async () => {
    const urlOther = 'http://localhost:8000/others';
    await axios.get(urlOther).then((response) => {
      setDataOther(response.data);
    });
  };
  const fetchDataFour = async () => {
    const urlSite = 'http://localhost:8000/sites';
    await axios.get(urlSite).then((response) => {
      setDataSite(response.data);
    });
  };

  useEffect(() => {
    fetchDataOne();
    fetchDataTwo();
    fetchDataThree();
    fetchDataFour();
  }, []);

  return (
    <div className="cell-data-select">
      <SELECTDATA className="data-select">
        <optgroup label="Action Terrain">
          <option disabled selected value>
            -- --
          </option>
          {dataSite.map((i) => (
            <option key={i._id} value={i.siteName}>
              {i.siteName}
            </option>
          ))}
        </optgroup>
        <optgroup label="Action Agence">
          {dataAgency.map((ag) => (
            <option key={ag._id} value={ag.agencyName}>
              {ag.agencyName}
            </option>
          ))}
        </optgroup>
        <optgroup label="Aleas">
          {dataHazard.map((ha) => (
            <option key={ha._id} value={ha.hazardName}>
              {ha.hazardName}
            </option>
          ))}
        </optgroup>
        <optgroup label="Autre">
          {dataOther.map((ot) => (
            <option key={ot._id} value={ot.otherName}>
              {ot.otherName}
            </option>
          ))}
        </optgroup>
      </SELECTDATA>
    </div>
  );
};

export default CellData;
