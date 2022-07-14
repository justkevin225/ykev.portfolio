import React from 'react'
import styled from 'styled-components'
import { device } from '../data/ScreensData'

const Text = styled.h1`
position: fixed;
left: ${props => props.left};
top: ${props => props.top};
right: ${props => props.right};
color: ${props => `rgba(${props.theme.textRgba}, 0.2)`};
font-size: calc(5rem + 5vw);
z-index: 0;
@media ${device.mobileM} {
    font-size: calc(3rem + 5vw);
}
`

export default function BigTitleComponent(props) {
    return (
        <Text top={props.top} right={props.right} left={props.left}>
            {props.text}
        </Text>
    )
}
