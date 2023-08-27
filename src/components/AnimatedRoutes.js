import React from "react";

import Main from "./Sections/Main";
import Pricing from "./Sections/Pricing";
import Footer from "./default/footer";
import About from "./Sections/About";
import { Route, Routes } from "react-router-dom";

export default function AnimatedRoutes() {
  return (
    <>
      <Routes>
        <Route index element={<Main />} />
        <Route path="pricing" element={<Pricing />}>
          <Route index element={<Footer />} />
        </Route>
        <Route path="about" element={<About />} />
      </Routes>
    </>
  );
}
