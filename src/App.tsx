import React from "react";
import { FunctionComponent } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { checkForShowNav } from "./helpers/checkForShowNav";

import MaNavBar from "./components/MaNavBar/MaNavBar";
import styled from "@emotion/styled";
import GlobalStyle from "./globalStyles";
import AnimatedRoutes from "./components/AnimatedRoutes/AnimatedRoutes";
import LogoKevin from "./components/LogoKevin/LogoKevin";
import blackNWhite from "./helpers/blackNwhite";
import { ThemeProvider } from "styled-components";

const BottomNav = styled.div`
  position: fixed;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
`;

const App: FunctionComponent = () => {
  return (
    <div id="App">
      <ThemeProvider theme={blackNWhite}>
        <GlobalStyle />
        <Router basename={process.env.PUBLIC_URL}>
          {checkForShowNav() && <LogoKevin />}
          <BottomNav>{checkForShowNav() && <MaNavBar />}</BottomNav>
          <AnimatedRoutes />
        </Router>
      </ThemeProvider>
    </div>
  );
};

export default App;
