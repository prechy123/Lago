import React from "react";
import Hero from "./about/Hero";
import AboutText from "./about/About-text";
import AboutTeam from "./about/About-team";
import Footer from "../default/footer";
import { motion } from "framer-motion";

const aboutVariant = {
  exit: {
    x: "-100vw",
    ease: "easeInOut",
  },
};

export default function About() {
  return (
    <motion.section id="about" variants={aboutVariant} exit="exit">
      <Hero />
      <AboutText />
      <AboutTeam />
      <Footer />
    </motion.section>
  );
}
