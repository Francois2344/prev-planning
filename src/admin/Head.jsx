import React from 'react';
import { FiPower } from 'react-icons/fi';
import styled from 'styled-components';
import LogoAdmin from '../image/VCF gris.jpg';

const DIV = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #c4c4c4;

  .logo-vcf {
    width: 130px;
    padding: 15px;
  }
  .title-admin {
    color: #1a3478;
    font-size: large;
    margin: auto;
  }

  .icon-disconnect {
    color: #1a3478;
    padding: 15px;
    font-size: 30px;
  }

  @media screen and (min-width: 1224px) {
    .logo-vcf {
      padding: 15px;
      height: 50px;
      width: 10em;
    }

    .title-admin {
      font-size: 40px;
    }

    .icon-disconnect {
      padding: 30px;
    }
  }
`;

const Head = () => {
  return (
    <DIV className="head-admin">
      <div className="logo-admin">
        <img className="logo-vcf" src={LogoAdmin} alt="" />
      </div>
      <h2 className="title-admin">Administration</h2>
      <span>
        <FiPower className="icon-disconnect" />
      </span>
    </DIV>
  );
};

export default Head;
