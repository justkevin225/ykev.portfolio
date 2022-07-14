import React from 'react'
import styled from 'styled-components'
import Particles from 'react-tsparticles'
import configLight from '../config/configLight';
import configDark from '../config/configDark';

const Box = styled.div`
position: absolute;
right: 0;
left: 0;
bottom: 0;
top: 0;
`

export default function ParticlesComponent(props) {
      return (
        <Box>
        <Particles
          id="tsparticles"
          options={props.theme === "dark" ? configDark : configLight} 
        />
        </Box>
      );
}
