/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Header from '../view/Header';

const Container = (props) => {
  return (
    <div>
      <Header />
      <div>{props.children}</div>
    </div>
  );
};

export default Container;
