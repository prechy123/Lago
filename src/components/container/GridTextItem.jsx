import React from "react";
import { motion } from "framer-motion";

export default function GridTextItem(props) {
  return (
    <motion.div className="q-item" initial={{x: "100px"}} whileInView={{x: 0}} transition={{duration: 2}}>
      <p>{props.para}</p>
      <h1>{props.title}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
        nostrum soluta. Ullam in reiciendis harum? Consequatur quibusdam tempora
        sint, rerum nulla cupiditate fugiat laudantium, tempore autem itaque
        architecto, illum quam.
      </p>
    </motion.div>
  );
}
