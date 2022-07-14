import { motion } from "framer-motion";
import React from "react";
import pagesVariants from "../helpers/pagesVariants";

const Error = () => {
  return (
    <motion.div
      variants={pagesVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      Error
    </motion.div>
  );
};

export default Error;
