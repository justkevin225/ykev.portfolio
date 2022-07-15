import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import CardAccueil from "../CardAccueil/CardAccueil"
import MySelf from '../../assets/img/just_me.png'

const IntroBox = styled(motion.div)`
  z-index: 1;
  width: 85vw;
  height: 100%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  color: ${(props) => props.theme.gray};

`;

const Me = styled(motion.img)`
  position: absolute;
  width: 37vw;
  height: auto;
  right: 0;
  top: 1.5%;
`;

const Intro = () => {

  return (
    CardAccueil === null ?
      <div>Lol</div> :
      <IntroBox>
        <CardAccueil />
        <Me
          animate={{
            x: [0, 15, 0],
            y: [0, -22, 0],
            opacity: [1, 1, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 5,
            type: "spring",
            stiffness: 100,
          }}
          exit={{
            y: 20,
            opacity: 0,
            transition: {
              duration: 0.3,
            },
          }}
          src={MySelf}
          alt="My self"
        />
      </IntroBox>
  );
};

export default Intro;
