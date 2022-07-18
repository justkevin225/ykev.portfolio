import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import setActive from "../../helpers/setActive";
import "./MaNavBar.scss";
import styled from "styled-components";
import navigate from "../../helpers/navigate";

const setActiveOnClick = (e: any): void => {
  e.preventDefault();
  const activeLi: any = e.currentTarget;
  const parent: any = e.currentTarget.parentNode;
  const children: any = parent.querySelectorAll("li");
  const indicator: any = document.getElementById("indicator");
  const activeIcon: any =
    document.querySelector("#indicator div")?.firstElementChild;

  children.forEach((Li: any) => {
    activeLi === Li
      ? activeLi.classList.add("active")
      : Li.classList.remove("active");
    const id: string = activeLi.id;
    setActive(id, indicator, activeIcon);
  });
};

// Dans le cas ou l'utilisateur navigue avec l'url
document.addEventListener("DOMContentLoaded", () => {
  navigate();
});

const Svg = styled(motion.svg)`
  fill: ${(props) => props.theme.gray};
`;
const Indicator = styled(motion.div)`
  border: 3px solid ${(props) => props.theme.gray};
  background: ${(props) => props.theme.white};
  i {
    color: ${(props) => props.theme.gray};
  }
`;

const MaNavBar = () => {
  return (
    <motion.div
      initial={{
        y: 30,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.8,
        },
      }}
      exit={{
        y: 30,
        opacity: 0,
        transition: {
          duration: 0.8,
        },
      }}
      id="nav-container"
    >
      <Indicator id="indicator" className="Accueil">
        <div>
          <i className="fa-duotone fa-house-chimney"></i>
        </div>
      </Indicator>
      <nav id="nav">
        <ul>
          <li
            onClick={(e) => {
              setActiveOnClick(e);
            }}
            id="Skills"
          >
            <Link to="/Skills">
              <i className="fa-duotone fa-chess-knight"></i>
              <span>Skills</span>
            </Link>
          </li>

          <li
            onClick={(e) => {
              setActiveOnClick(e);
            }}
            id="Portfolio"
          >
            <Link to="/Portfolio">
              <i className="fa-duotone fa-laptop-code"></i>
              <span>Portfolio</span>
            </Link>
          </li>

          <li
            onClick={(e) => {
              setActiveOnClick(e);
            }}
            id="Accueil"
            className="active"
          >
            <Link to="/Accueil">
              <i className="fa-duotone fa-house-chimney"></i>
              <span>Accueil</span>
            </Link>
          </li>

          <li
            onClick={(e) => {
              setActiveOnClick(e);
            }}
            id="Moi"
          >
            <Link to="/Moi">
              <i className="fa-duotone fa-user-tie"></i>
              <span>Moi</span>
            </Link>
          </li>

          <li
            onClick={(e) => {
              setActiveOnClick(e);
            }}
            id="Contact"
          >
            <Link to="/Contact">
              <i className="fa-duotone fa-headset"></i>
              <span>Contact</span>
            </Link>
          </li>

          <Svg
            id="nav-bar-slider"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1087.1 64.51"
          >
            <title>nav-bar</title>
            <path d="M1087.1,0V64.51H0V0H518.5a18.7,18.7,0,0,1,16.92,10.74,37.51,37.51,0,0,0,33.94,21.52A37.53,37.53,0,0,0,603.3,10.73,18.71,18.71,0,0,1,620.23,0Z" />
          </Svg>
        </ul>
      </nav>
    </motion.div>
  );
};

export default MaNavBar;
