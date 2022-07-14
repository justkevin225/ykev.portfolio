import styled from '@emotion/styled'
import React from 'react'
import {BallTriangle} from  'react-loader-spinner'

const Load = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
background: rgba(255, 255, 255, 0.65);
`

const Loading = () => {
  return (
    <Load>
        <BallTriangle color="black" height={70} width={70} />
    </Load>
  )
}

export default Loading