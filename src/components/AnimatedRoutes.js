import React from "react";

import Main from "./Sections/Main";
import Pricing from "./Sections/Pricing";
// import Footer from "./default/footer";
import About from "./Sections/About";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

export default function AnimatedRoutes() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence>
        <Routes location={location} key={location.key}>
          <Route index element={<Main />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="about" element={<About />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}
