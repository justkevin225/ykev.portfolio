import { motion } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Bienvenue from "../components/Bienvenue/Bienvenue";
import MonLogoAnime from "../components/MonLogoAnime/MonLogoAnime";

const Main = styled(motion.div)`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

const Welcome = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  &:last-child {
    font-family: "Never Surrender";
  }
`;

const Intro = () => {
  const navigate = useNavigate();
  setTimeout(() => {
    window.location.pathname = "/Accueil";
    navigate("/Accueil");
  }, 4500);
  return (
    <Main
      initial={false}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.3,
        },
      }}
    >
      <Welcome>
        <MonLogoAnime />
        <Bienvenue />
      </Welcome>
    </Main>
  );
};

export default Intro;
