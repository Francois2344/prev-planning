import React from 'react';
import LogoAdmin from '../image/VCF gris.jpg';

const Head = () => {
  return (
    <div className="head-admin">
      <div className="logo-admin">
        <img className="logo-vcf" src={LogoAdmin} alt="" />
      </div>
      <h2 className="title-admin">Administration</h2>
    </div>
  );
};

export default Head;
