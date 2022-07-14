import React from 'react';
import styled from 'styled-components';
import logoKevinPng from "../assets/Images/mon-logo.png";
import { device } from '../data/ScreensData';

const Kevin = styled.img`
border-radius: 50%;
position: fixed;
left: 2rem;
top: 2rem;
z-index: 3;
width: 4rem;
height: auto;
@media ${device.tablet} {
    left: 1.2rem;
    top: 1.7rem;
    width: 2.5rem;
}
`

const LogoKevin = (props) => {
    return (
        <Kevin src={logoKevinPng} alt="Logo Kevin" />
    );
}

export default LogoKevin;
