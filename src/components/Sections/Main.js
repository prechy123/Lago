import React from "react";
import Hero from "./Hero";
import Next1 from "./Next1";
import Solution from "./Solution";
import Featured from "./Featured";
import ProductsUpdate from "./ProductsUpdate";
import Footer from "../default/footer";
import { motion } from "framer-motion";

const mainVariant = {
  exit: {
    x: "-100vw",
    ease: "easeInOut",
  },
};

export default function Main() {
  return (
    <motion.div variants={mainVariant} exit="exit">
      <Hero />
      <Next1 />
      <Solution />
      <Featured />
      <ProductsUpdate />
      <Footer />
    </motion.div>
  );
}
