import React from "react";
import Hero from "./about/Hero"
import AboutText from "./about/About-text"
import AboutTeam from "./about/About-team"
import Footer from "../default/footer";

export default function About() {
  return (
    <section id="about">
      <Hero />
      <AboutText />
      <AboutTeam />
      <Footer />
    </section>
  );
}
