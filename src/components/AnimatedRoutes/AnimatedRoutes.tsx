import React, { lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Intro from "../../pages/Intro";
import Admin from "../../pages/Admin";
import Loader from "../Loader/Loader";

const Accueil = lazy(() => import("../../pages/Accueil"));
const Contact = lazy(() => import("../../pages/Contact"));
const Moi = lazy(() => import("../../pages/Moi"));
const Portfolio = lazy(() => import("../../pages/Portfolio"));
const Skills = lazy(() => import("../../pages/Skills"));
const Error = lazy(() => import("../../pages/Error"));

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <Suspense fallback={<Loader />}>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Intro />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Accueil" element={<Accueil />} />
          <Route path="/Moi" element={<Moi />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
};

export default AnimatedRoutes;
