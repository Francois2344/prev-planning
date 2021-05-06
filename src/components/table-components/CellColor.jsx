/* eslint-disable no-plusplus */
/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const COLOR = styled.div`
  td {
    width: 150px;
  }
`;

const CellColor = () => {
  const darkgreen = '#4FA100';
  const lightgreen = '#88FF17';
  const pink = '#FF43D7';
  const orange = '#FFA419';
  const white = '#FFFFFF';

  const [cellColorData, setCellColorData] = useState([
    darkgreen,
    lightgreen,
    orange,
    pink,
  ]);

  const handleColor = () => {
    setCellColorData(
      cellColorData === white
        ? lightgreen
        : cellColorData === lightgreen
        ? pink
        : cellColorData === pink
        ? orange
        : cellColorData === orange
        ? darkgreen
        : white
    );
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('key'));
    if (data) {
      setCellColorData(data);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('key', JSON.stringify(cellColorData));
  });

  return (
    <COLOR className="cell-color">
      <td
        className="cell-click"
        role="presentation"
        style={{ backgroundColor: cellColorData }}
        onClick={(e) => handleColor(e.target.style.backgroundColor)}
      />
    </COLOR>
  );
};

export default CellColor;
