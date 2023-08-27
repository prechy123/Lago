import React from "react";
import Hero from "./Hero";
import Next1 from "./Next1";
import Solution from "./Solution";
import Featured from "./Featured";
import ProductsUpdate from "./ProductsUpdate";
import Footer from "../default/footer";
import { motion } from "framer-motion";

const mainVariants = {
  initial: {
    x: "-100vw",
    opacity: 0,
  },
  animate: {
    x: "0",
    opacity: 1,
    transition: {
      duration: 3,
    },
  },
};

export default function Main() {
  return (
    <motion.div
      id="main"
      variants={mainVariants}
      initial="initial"
      animate="animate"
    >
      <Hero />
      <Next1 />
      <Solution />
      <Featured />
      <ProductsUpdate />
      <Footer />
    </motion.div>
  );
}
