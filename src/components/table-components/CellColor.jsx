/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import styled from 'styled-components';

const COLOR = styled.div`
  td {
    height: 40px;
    width: 40px;
  }
`;

const CellColor = () => {
  const darkgreen = '#4FA100';
  const lightgreen = '#88FF17';
  const pink = '#FF43D7';
  const orange = '#FFA419';
  const white = '#FFFFFF';

  const [cellColor, setCellColor] = useState({
    darkgreen,
    lightgreen,
    orange,
    pink,
  });

  const handleColor = () => {
    setCellColor(
      cellColor === white
        ? lightgreen
        : cellColor === lightgreen
        ? pink
        : cellColor === pink
        ? orange
        : cellColor === orange
        ? darkgreen
        : white
    );
  };

  return (
    <COLOR className="cell-color">
      <td
        role="presentation"
        style={{ backgroundColor: cellColor }}
        onClick={(e) => handleColor(e.target.style.backgroundColor)}
      />
    </COLOR>
  );
};

export default CellColor;
