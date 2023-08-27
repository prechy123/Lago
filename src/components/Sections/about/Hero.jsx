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
const gridVariants = {
  initial: {
    x: "100vw"
  },
  animate: {
    x: 0,
    transition: {
      delay: 1.5,
      when: "beforeChildren",
      staggerChildren: 0.3,
      duration: 1
    }
  }
}
const childVariants = {
  initial : {
    y: 100,
    opacity: 0.5
  },
  animate: {
    y: 0,
    opacity: 1
  }
}

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
      <motion.div className="grid-container" variants={gridVariants} initial="initial" animate="animate">
        <motion.div className="grid-item-1" variants={childVariants}></motion.div>
        <motion.div className="grid-item-2" variants={childVariants}></motion.div>
        <motion.div className="grid-item-3" variants={childVariants}></motion.div>
        <motion.div className="grid-item-4" variants={childVariants}></motion.div>
        <motion.div className="grid-item-5" variants={childVariants}></motion.div>
        <motion.div className="grid-item-6" variants={childVariants}></motion.div>
      </motion.div>
    </motion.section>
  );
}
