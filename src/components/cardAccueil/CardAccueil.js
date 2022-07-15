import React from "react";
import Typewriter from "typewriter-effect";
import Tilt from "react-vanilla-tilt"
import styled from "styled-components";
import { device } from "../../data/ScreensData";
import { motion } from "framer-motion";
import { AccueilText } from "../../data/AccueilDatas";



const Text = styled(motion.div)`
  width: 40vw;
  height: 35vh;
  color: ${(props) => props.theme.gray};
  border: 2.5px solid ${(props) => props.theme.gray};
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(2px);

  @media ${device.mobileM} {
    padding-top: 0.5rem;
  }
  & > *:nth-child(1) {
    font-weight: 500;
    font-size: calc(4rem + 1vw);
    @media ${device.mobileM} {
      font-size: calc(2.5em + 0.7vw);
    }
  }
  & > *:nth-child(2) {
    font-weight: 600;
    font-size: calc(1.05rem + 1vw);
  }

  & > *:nth-child(3) {
    font-weight: 500;
    color: ${(props) => props.theme.gray};
    font-size: calc(0.15rem + 1.3vw);
    margin: 8px;
    @media ${device.tablet} {
      font-size: calc(0.5rem + 1.3vw);
    }
  }
`;


const CardAccueil = () => {
  const Type = (typewriter) => {
    for (let i = 0; i < AccueilText.length; i++) {
      const data = AccueilText[i];
      typewriter
        .changeDelay(70)
        .typeString(data.text)
        .pauseFor(100)
      for (let j = 0; j < data.techno.length; j++) {
        const tech = data.techno[j];
        typewriter
          .typeString(`<span style='color: ${tech.color}'>${tech.nom} <i class='${tech.icon}'></i></span>`)
          .pauseFor(2000)
          .deleteChars(tech.nom.length + 1)
      }
      typewriter.deleteAll()
    }
    typewriter.start();
  }
  return (
    <div>
      <Tilt id="Tilt" style={{ position: "absolute", top: "30%", left: "0%" }}>
        <Text
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          exit={{ scaleY: 0, transition: { duration: 0.3 } }}
          transition={{
            type: "spring",
            duration: 6.5,
            delay: 0.3,
            stiffness: 300,
          }}
        >
          <h2 className="text-center">Salut</h2>
          <h3 className="text-center">Moi c'est Kevin</h3>
          <h6 className="text-center">
            <Typewriter
              options={{ loop: true }}
              onInit={(typewriter) => {
                Type(typewriter)
              }}
            />
          </h6>
        </Text>

      </Tilt>
    </div>
  );
};

export default CardAccueil;
