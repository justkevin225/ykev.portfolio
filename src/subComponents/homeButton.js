import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { HomeIcon } from '../components/AllSvg';
import { darkTheme } from '../components/Themes';

const Power = styled.button`
position: fixed;
top: 2rem;
left: 50%;
transform: translateX(-50%);

background-color: ${props => props.theme.body};
padding: 0.3rem;
border: solid 2.4px ${props => props.theme.text};
border-radius: 50%;
width: 2.6rem;
height: 2.6rem;

display: flex;
align-items: center;
justify-content: center;
line-height: 100%;

cursor: pointer;
z-index: 10;
transition: 0.2s transform;

&:hover{
    background-color: #1bd71bcf;
    box-shadow: 0 0 5px 3px #10dd10a1;
    transform: translate(-50%, 0);
    transition: 0.2s transform;
}

&:active{
    background-color: #029302cf;
}

&>*:first-child{
    text-decoration: none;
    color: inherit;

}
`

const HomeButton = (props) => {
    return (
        <Power>
            <Link to="/">
                <HomeIcon fill={props.theme === "dark" ? darkTheme.text : darkTheme.body} width={25} heigth={25} />
            </Link>
        </Power>
    );
}

export default HomeButton;
