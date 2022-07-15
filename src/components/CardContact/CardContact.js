import React from "react";
import Tilt from "react-vanilla-tilt";
import Card from "../../helpers/cardStyle";
import Button from '@material-ui/core/Button';
import styled from "styled-components";
import { motion } from "framer-motion";

const ButtonK = styled(Button)`
  background-color: ${(props) => props.theme.gray} !important;
  text-transform: none !important;
  color:  ${(props) => props.theme.white} !important;
  font-family: "Maven Pro" !important;
`;


const CardContact = ({ topIcon, contactMean, contactRef, btnText, btnIcon, link, delay }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50
      }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 2,
          type: "spring",
          stiffness: 150,
          delay: delay
        }
      }}
      exit={{
        opacity: 0,
        y: 50,
        transition: {
          duration: 0.09,
          delay: delay
        }
      }}
    >
      <Tilt id="Tilt" style={{ width: "100%" }}>
        <Card>
          <div className="text-center fs-3">
            <i className={topIcon}></i>
          </div>
          <div className="text-center fs-5">{contactMean}</div>
          <div className="text-center fs-7 fw-bold">{contactRef}</div>
          <div className="text-center py-3">
            <ButtonK
              variant="contained"
              size="small"
              endIcon={<i className={btnIcon}></i>}
              target="_blank"
              href={link}
            >
              {btnText}
            </ButtonK>
          </div>
        </Card>
      </Tilt>
    </motion.div >
  );
};

export default CardContact;
