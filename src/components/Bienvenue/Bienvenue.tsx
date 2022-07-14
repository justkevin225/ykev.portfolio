import React from "react";
import styled from "styled-components";

const Message = styled.div`
  font-size: 1.5rem;
  color: ${(props) => props.theme.gray};
  & span {
    opacity: 0.8;
    margin-right: 3px;
    animation-name: anim;
    animation-duration: 1s;
    animation-timing-function: ease-in-out;
  }
  & span:nth-of-type(1) {
    animation-delay: 0.2s;
  }
  & span:nth-of-type(2) {
    animation-delay: 0.4s;
  }
  & span:nth-of-type(3) {
    animation-delay: 0.6s;
  }
  & span:nth-of-type(4) {
    animation-delay: 0.8s;
  }
  & span:nth-of-type(5) {
    animation-delay: 1s;
  }
  & span:nth-of-type(6) {
    animation-delay: 1.2s;
  }
  & span:nth-of-type(7) {
    animation-delay: 1.4s;
  }
  & span:nth-of-type(8) {
    animation-delay: 1.5s;
  }
  & span:nth-of-type(9) {
    animation-delay: 1.7s;
  }

  @keyframes anim {
    0% {
      opacity: 0.8;
      text-shadow: none;
    }
    50% {
      opacity: 1;
      text-shadow: 0px 3px 6px rgba(66, 66, 66, 0.35),
        0px -3px 6px rgba(66, 66, 66, 0.35), 3px 0px 6px rgba(66, 66, 66, 0.35),
        -3px 0px 6px rgba(66, 66, 66, 0.35);
    }
    100% {
      opacity: 0.8;
      text-shadow: none;
    }
  }
`;
const Bienvenue = () => {
  return (
    <Message>
      <span>B</span>
      <span>I</span>
      <span>E</span>
      <span>N</span>
      <span>V</span>
      <span>E</span>
      <span>N</span>
      <span>U</span>
      <span>E</span>
    </Message>
  );
};

export default Bienvenue;
