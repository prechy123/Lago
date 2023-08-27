import React from "react";
import { motion } from "framer-motion";

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255, 255, 255)",
    boxShadow: "0px 0px 80px #0d0c0c",
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      duration: 0.3,
    },
  },
};
export default function PricingComponent(props) {
  return (
    <div className="pricing-comp-item">
      <div className="item-type">
        <h2>{props.type}</h2>
      </div>
      <h1>{props.price}/mo</h1>
      <p>{props.users} users included</p>
      <p>{props.storage} Gb of storage</p>
      <p>{props.support} support</p>
      <p>Help center access</p>
      <motion.button variants={buttonVariants} whileHover="hover">
        {props.button}
      </motion.button>
    </div>
  );
}
