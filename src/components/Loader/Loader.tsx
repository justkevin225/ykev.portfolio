import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Load = styled(motion.div)`
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  z-index: 10;
`;
const Loader = () => {
  return (
    <Load>
      <motion.div
        initial={{
          scale: 0,
        }}
        animate={{
          scale: 1,
          transition: {
            type: "spring",
            duration: 1,
            stiffness: 300,
          },
        }}
        exit={{
          scale: 0,
        }}
        className="text-center"
      >
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </motion.div>
      <span className="fw-1 fs-5">Un instant...</span>
    </Load>
  );
};

export default Loader;
