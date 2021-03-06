/* eslint-disable indent */
/* eslint-disable react/prop-types */
/* eslint-disable no-plusplus */
/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import styled from 'styled-components';

const COLOR = styled.div`
  td {
    width: 150px;
  }
`;
// 1er Composant du tableau, cellule qui change de couleur au clic, viens s'incruster au composant DataCell

function CellColor() {
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

  return (
    <COLOR className="cell-color">
      <td
        className="cell-click"
        role="presentation"
        style={{ backgroundColor: cellColorData }}
        onClick={(e) => handleColor(e.target.backgroundColor)}
      />
    </COLOR>
  );
}

export default CellColor;
