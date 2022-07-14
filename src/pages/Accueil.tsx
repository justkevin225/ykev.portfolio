import React from "react";
import { motion } from "framer-motion";
import pagesVariants from "../helpers/pagesVariants";
import styled from "@emotion/styled";
import Intro from "../components/IntroAccueil/IntroAccueil";
import Bubble from "../components/Bubble/Bubble";
import randomInt from "../helpers/randomInt";

const Main = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  .exit {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;

const Accueil = () => {
  return (
    <Main
      variants={pagesVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.div
        initial={{
          x: "-50%",
        }}
        animate={{
          x: 0,
          transition: {
            duration: 0.3,
          },
        }}
        exit={{
          x: "-50%",
          transition: {
            duration: 0.3,
            ease: "easeInOut",
          },
        }}
        className="exit"
      >
        <Bubble width="50px" x="20%" y="80%" duration={randomInt(2, 6)} />
        <Bubble width="150px" x="5%" y="50%" duration={randomInt(2, 6)} />
        <Bubble width="95px" x="40%" y="30%" duration={randomInt(2, 6)} />
      </motion.div>
      <motion.div
        initial={{
          x: "50%",
        }}
        animate={{
          x: 0,
          transition: {
            duration: 0.3,
          },
        }}
        exit={{
          x: "50%",
          transition: {
            duration: 0.3,
          },
        }}
        className="exit"
      >
        <Bubble width="70px" x="85%" y="85%" duration={randomInt(2, 6)} />
        <Bubble width="120px" x="70%" y="10%" duration={randomInt(2, 6)} />
        <Bubble width="35px" x="60%" y="35%" duration={randomInt(2, 6)} />
      </motion.div>
      <Intro />
    </Main>
  );
};

export default Accueil;
