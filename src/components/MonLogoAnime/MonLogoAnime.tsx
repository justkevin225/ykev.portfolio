import React, { FunctionComponent } from "react";
import { motion } from "framer-motion";
import "./MonLogoAnime.scss";

const pathVariants = {
  Init: {
    fillOpacity: 0,
    pathLength: 0,
  },
  Show: {
    fillOpacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const MonLogoAnime: FunctionComponent = () => {
  return (
    <div className="MonLogoAnime">
      <svg
        id="MonLogoAnime"
        data-name="MonLogoAnime"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 169.75 169.44"
      >
        <title>mon-logo-border</title>
        <motion.path
          // body up
          variants={pathVariants}
          initial="Init"
          animate="Show"
          className="cls-1"
          d="M184,174.45l-20.84,20.77a1.92,1.92,0,0,0,0,2.71l17.33,17.36a1.91,1.91,0,0,0,2.7,0L210.7,188a1.9,1.9,0,0,0-.56-3.09l-24-10.83A1.92,1.92,0,0,0,184,174.45Z"
          transform="translate(-157.12 -133.04)"
        />

        <motion.path
          // Leg right
          variants={pathVariants}
          initial="Init"
          animate="Show"
          className="cls-1"
          d="M216.6,251l50.1,50.18a1.9,1.9,0,0,0,1.35.56H324.2a1.91,1.91,0,0,0,1.36-3.26l-78.05-78.05a1.91,1.91,0,0,0-1.43-.55L213,221.24a1.9,1.9,0,0,0-1.8,2.25L216.07,250A2,2,0,0,0,216.6,251Z"
          transform="translate(-157.12 -133.04)"
        />
        <motion.path
          // head left
          variants={pathVariants}
          initial="Init"
          animate="Show"
          className="cls-1"
          d="M158.8,135.71v54.84a1.91,1.91,0,0,0,3.26,1.36l54.47-54.32a1.91,1.91,0,0,0-1.33-3.26l-54.47-.54A1.92,1.92,0,0,0,158.8,135.71Z"
          transform="translate(-157.12 -133.04)"
        />
        <motion.path
          // body down
          variants={pathVariants}
          initial="Init"
          animate="Show"
          className="cls-1"
          d="M163,240.4,185.27,263a1.9,1.9,0,0,0,2.23.36l23-11.81a1.92,1.92,0,0,0,.48-3L183,220.5a1.91,1.91,0,0,0-2.7,0L163,237.7A1.92,1.92,0,0,0,163,240.4Z"
          transform="translate(-157.12 -133.04)"
        />
        <motion.path
          //head right
          variants={pathVariants}
          initial="Init"
          animate="Show"
          className="cls-1"
          d="M324.16,134.92h-56.4a2,2,0,0,0-1.35.55l-50.17,49.85a2,2,0,0,0-.54,1L211.16,213a1.92,1.92,0,0,0,1.8,2.23L246,216.78a1.93,1.93,0,0,0,1.44-.56l78-78A1.91,1.91,0,0,0,324.16,134.92Z"
          transform="translate(-157.12 -133.04)"
        />
        <motion.path
          // body mid
          variants={pathVariants}
          initial="Init"
          animate="Show"
          className="cls-1"
          d="M208.93,194.87,186.56,217.1a1.41,1.41,0,0,0,0,2l22.58,22.62a1.4,1.4,0,0,0,2.35-1.32l-5.24-21.72a1.43,1.43,0,0,1,0-.65l5-21.84A1.41,1.41,0,0,0,208.93,194.87Z"
          transform="translate(-157.12 -133.04)"
        />
        <motion.path
          // Leg left
          variants={pathVariants}
          initial="Init"
          animate="Show"
          className="cls-1"
          d="M159.8,300.81l54.43-.54a1.91,1.91,0,0,0,1.32-3.27l-54.07-53.39a1.91,1.91,0,0,0-3.25,1.34l-.36,53.94A1.9,1.9,0,0,0,159.8,300.81Z"
          transform="translate(-157.12 -133.04)"
        />
      </svg>
    </div>
  );
};

export default MonLogoAnime;
