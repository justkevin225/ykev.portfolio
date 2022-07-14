import React from 'react'
import styled from 'styled-components'
import Particles from 'react-tsparticles'
import ApplicationConfig from '../config/ApplicationConfig';

const Box = styled.div`
position: absolute;
right: 0;
left: 0;
bottom: 0;
top: 0;
`

export default function ApplicationsParticlesComponent(props) {
      return (
        <Box>
        <Particles
          id="tsparticles"
          options={ApplicationConfig} 
        />
        </Box>
      );
}
