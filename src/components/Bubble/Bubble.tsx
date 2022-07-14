import React, { FunctionComponent } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
type Props = {
  width: string;
  x: string;
  y: string;
  duration: number;
};

const BubbleContainer = styled(motion.div).attrs(
  (props: { width: string; x: string; y: string }) => props
)`
  position: absolute;
  width: ${(props) => props.width};
  height: ${(props) => props.width};
  background: radial-gradient(
    circle at bottom,
    #b4b4b4,
    ${(props) => props.theme.black}
  );
  left: ${(props) => props.x};
  top: ${(props) => props.y};
  border-radius: 50%;
`;

const Bubble: FunctionComponent<Props> = ({ width, x, y, duration }) => {
  return (
    <BubbleContainer
      animate={{
        y: [0, -12, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: duration,
        type: "spring",
        stiffness: 100,
      }}
      width={width}
      x={x}
      y={y}
    ></BubbleContainer>
  );
};

export default Bubble;
