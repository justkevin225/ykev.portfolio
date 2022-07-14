import React from "react";
import { motion } from "framer-motion";
import pagesVariants from "../helpers/pagesVariants";
import styled from "@emotion/styled";
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

const Skills = () => {
  return (
    <Main
      variants={pagesVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
        className="title"
      >
        Skills
      </motion.div>
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
        <Bubble width="85px" x="5%" y="50%" duration={randomInt(2, 6)} />
        <Bubble width="45px" x="35%" y="70%" duration={randomInt(2, 6)} />
        <Bubble width="105px" x="15%" y="10%" duration={randomInt(2, 6)} />
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
        <Bubble width="80px" x="75%" y="75%" duration={randomInt(2, 6)} />
        <Bubble width="110px" x="60%" y="15%" duration={randomInt(2, 6)} />
        <Bubble width="55px" x="88%" y="35%" duration={randomInt(2, 6)} />
      </motion.div>
    </Main>
  );
};

export default Skills;
