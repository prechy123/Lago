import React from "react";
import logo from "./img/index.png";
import logo2 from "./img/logo.jpg";
import ProblemContainer from "../container/problemContainer";
import { motion } from "framer-motion";

const containerVarients = {
  initial: {
    y: "100px",
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 2,
      staggerChildren: 0.1,
    },
  },
};
export default function Next1() {
  return (
    <motion.section
      id="next1"
      variants={containerVarients}
      initial="initial"
      whileInView="animate"
    >
      <div className="brands">
        <p>With developer signup from the world's leading brands</p>
        <div>
          <motion.img
            src={logo}
            alt="Logo"
            width={100}
            variants={containerVarients}
            drag
            dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
          />
          <motion.img
            src={logo2}
            alt="Logo"
            width={100}
            variants={containerVarients}
            drag
            dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
          />
          <motion.img
            src={logo}
            alt="Logo"
            width={100}
            variants={containerVarients}
            drag
            dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
          />
          <motion.img
            src={logo2}
            alt="Logo"
            width={100}
            variants={containerVarients}
            drag
            dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
          />
          <motion.img
            src={logo}
            alt="Logo"
            width={100}
            variants={containerVarients}
            drag
            dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
          />
          <motion.img
            src={logo2}
            alt="Logo"
            width={100}
            variants={containerVarients}
            drag
            dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
          />
          <motion.img
            src={logo}
            alt="Logo"
            width={100}
            variants={containerVarients}
            drag
            dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
          />
          <motion.img
            src={logo2}
            alt="Logo"
            width={100}
            variants={containerVarients}
            drag
            dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
          />
          <motion.img
            src={logo}
            alt="Logo"
            width={100}
            variants={containerVarients}
            drag
            dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
          />
          <motion.img
            src={logo2}
            alt="Logo"
            width={100}
            variants={containerVarients}
            drag
            dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
          />
        </div>
      </div>
      <div className="the-problem">
        <div className="the-problem-child">
          <h4>The problem</h4>
          <h1>
            Metering and billing are still <br />
            nightmares
          </h1>
          <p>
            Numerous edge cases. Constant pricing changes. Looming scalability
            issues.
          </p>
        </div>
        <div className="prob">
          <ProblemContainer title="For Engineers" />
          <ProblemContainer title="For Revenue leaders" />
          <ProblemContainer title="For Finance teams" />
        </div>
      </div>
    </motion.section>
  );
}
