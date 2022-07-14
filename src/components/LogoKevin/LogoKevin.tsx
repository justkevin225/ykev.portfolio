import React from "react";
import styled from "styled-components";
import logoKevinPng from "../../assets/img/mon-logo-bg-transparent.png";
import { motion } from "framer-motion";

const ImgContainer = styled(motion.div)`
  border-radius: 50%;
  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 3;
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.gray};
  img {
    width: 25px;
    height: 25px;
  }
`;

const LogoKevin = () => {
  return (
    <ImgContainer
      initial={{
        opacity: 0,
        y: "-50px",
      }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
        },
      }}
      exit={{
        opacity: 0,
        y: "-50px",
      }}
    >
      <img src={logoKevinPng} alt="Logo Kevin" />
    </ImgContainer>
  );
};

export default LogoKevin;
