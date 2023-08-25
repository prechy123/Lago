import React from "react";
import Hero from "./Hero";
import Next1 from "./Next1";
import Solution from "./Solution";
import Featured from "./Featured";
import ProductsUpdate from "./ProductsUpdate";
import Footer from "../default/footer";

export default function Main() {
  return (
    <div id="main">
      <Hero />
      <Next1 />
      <Solution />
      <Featured />
      <ProductsUpdate />
      <Footer />
    </div>
  );
}
