import React from 'react';
import styled from 'styled-components'
import avatar1 from '../image/avatar-1.png'

const CARD = styled.div`
width: 15%;
display: flex;
flex-direction: column;
border-radius:3px;
box-shadow: 0 0 12px 3px rgba(0, 0, 0, 0.30);
border: solid 1px rgba(0, 0, 0, 0.08);

.profile {
    width:100px;
    height:100px;
    margin-top: 25px;
    border-radius: 50%;
    box-shadow: 0 0 12px 3px rgba(0, 0, 0, 0.20);
}

.person {
    padding: 10px;
    background-color: #a8a8a8;
    margin: auto;
}

h4 {
    display: flex;
    margin: 15px;
    color: #0049f5;
}

.table {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 10px;
    border-top: 2px solid grey;
    border-bottom: 2px solid grey;
    text-color:
}

.color1 {
    margin: 5px;
    color: #04f117;
}
.color2 {
    margin: 5px;
    color: #029c0f;
}
.color3 {
    margin: 5px;
    color: #fc2ccb;
}

`;


const Cards = () => {
    return (
        <CARD>
            <div class="card-container">
                <h3 className='person'>Nom  Prénom</h3>
                <div className='picture'>
                    <img className='profile' src={avatar1} alt='' />
                </div>
                <h4 class='title'>Ouverture:</h4>
                <table className='table'>
                <th class='color1'>Vert clair:</th>
                <th class='color2'>Vert foncé:</th>
                <th class='color3'>Rose:</th>
                </table>
            </div>
        </CARD>
    );
}

export default Cards;