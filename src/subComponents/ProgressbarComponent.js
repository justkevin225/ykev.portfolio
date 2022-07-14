import React from 'react';
import styled from 'styled-components';
import Main from "../data/MainSkillsStyle";
import { device } from '../data/ScreensData';

const Bar = styled.div`
position: relative;
border-radius: 50px;
background: transparent;
height: 3.5px;
&::after {
    content: "";
    position: absolute;
    height: 4px;
    border-radius: 50px;
    width: 0%;
    background-color: ${props => props.theme.text};
    animation: progressBarAnim 2.5s ease-in-out forwards;
    ${Main}:hover &{
        background-color: ${props => props.theme.body};
        transition: all 0.1s ease;
    }
}
`

const Title = styled.div`
font-size: calc(0.5em + 1vw);
font-weight: 500;
@media ${device.tablet} {
    font-size: calc(0.3em + 1vw);
}
`
const Years = styled.div`
font-size: calc(0.05em + 1vw);
display: flex;
align-items: center;
justify-content: space-between;
@media ${device.mobileL} {
    font-size: calc(0.15em + 1vw);
}
&:nth-child(2),
&:nth-child(3){
    position: relative;
}

span:nth-of-type(2)::after,
span:nth-of-type(3)::after {
    content: "";
    position: absolute;
    background-color: ${props => props.theme.text};
    width: 1px;
    height: 100px;
    transform: translate(-1vw, 3vh);
    ${Main}:hover &{
        background-color: ${props => props.theme.body };
        transition: all 0.1s ease;
    }
    @media ${device.mobileL} {
    font-size: calc(0.45em + 1vw);
    height: calc(68px - 0.40vw);
    }
}
`

const Item = styled.li`
list-style-type: none;
margin: 5px 0;
`
const Name = styled.div`
font-size: calc(0.05em + 1vw);
font-weight: 500;
@media ${device.mobileL} {
    font-size: calc(0.1em + 1vw);
}
`

const Progressbar = (props) => {
    return (
        <div>
            <div>
                <Title>{props.title}</Title>
                <Years>
                    <span>Année(s) d'expérience</span>
                    <span>1 an</span>
                    <span>2 ans</span>
                </Years>
            </div>
            <div>
                {
                    props.datas.map((item) => {
                        let maxYearXP = 2;
                        let currentXP = item.xp * 100 / maxYearXP + "%";
                        return (
                            <Item key={item.id}>
                                <Name>{item.value}</Name>
                                <Bar style={{ width: currentXP }}></Bar>
                            </Item>
                        )
                    })
                }
            </div>

        </div>
    );
}

export default Progressbar;
