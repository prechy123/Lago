import React from "react";
import { motion } from "framer-motion";

const containerVariance = {
  initial: {
    x: "100vw",
  },
  animate: {
    x: 0,
    transition: {
      duration: 1.5,
    },
  },
};

export default function Hero() {
  return (
    <motion.section
      id="hero"
      variants={containerVariance}
      initial="initial"
      animate="animate"
    >
      <div className="hero-title">
        <h1>The story of Lago</h1>
        <p>
          Learn more about our mission, how it started and the team behind this
          open-source project.
        </p>
      </div>
      <div className="grid-container">
        <div className="grid-item-1"></div>
        <div className="grid-item-2"></div>
        <div className="grid-item-3"></div>
        <div className="grid-item-4"></div>
        <div className="grid-item-5"></div>
        <div className="grid-item-6"></div>
      </div>
    </motion.section>
  );
}
