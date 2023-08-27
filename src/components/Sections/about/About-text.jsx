import React from "react";
import { motion } from "framer-motion";

export default function Abouttext() {
  return (
    <motion section id="abouttext">
      <motion.div
        className="l-side"
        initial={{ y: "-100vh", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
        iusto placeat corporis necessitatibus earum esse veritatis fugiat.
        Voluptatibus obcaecati quae esse tempore atque, veritatis vel labore
        commodi. Eum, voluptatibus nihil!
      </motion.div>
      <motion.div
        className="r-side"
        initial={{ y: "-100vh", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
        iusto placeat corporis necessitatibus earum esse veritatis fugiat.
        Voluptatibus obcaecati quae esse tempore atque, veritatis vel labore
        commodi. Eum, voluptatibus nihil! Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Doloribus iusto placeat corporis
        necessitatibus earum esse veritatis fugiat. Voluptatibus obcaecati quae
        esse tempore atque, veritatis vel labore commodi. Eum, voluptatibus
        nihil! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Doloribus iusto placeat corporis necessitatibus earum esse veritatis
        fugiat. Voluptatibus obcaecati quae esse tempore atque, veritatis vel
        labore commodi. Eum, voluptatibus nihil! Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Doloribus iusto placeat corporis
        necessitatibus earum esse veritatis fugiat. Voluptatibus obcaecati quae
        esse tempore atque, veritatis vel labore commodi. Eum, voluptatibus
        nihil! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Doloribus iusto placeat corporis necessitatibus earum esse veritatis
        fugiat. Voluptatibus obcaecati quae esse tempore atque, veritatis vel
        labore commodi. Eum, voluptatibus nihil! Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Doloribus iusto placeat corporis
        necessitatibus earum esse veritatis fugiat. Voluptatibus obcaecati quae
        esse tempore atque, veritatis vel labore commodi. Eum, voluptatibus
        nihil! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Doloribus iusto placeat corporis necessitatibus earum esse veritatis
        fugiat. Voluptatibus obcaecati quae esse tempore atque, veritatis vel
        labore commodi. Eum, voluptatibus nihil! Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Doloribus iusto placeat corporis
        necessitatibus earum esse veritatis fugiat. Voluptatibus obcaecati quae
        esse tempore atque, veritatis vel labore commodi. Eum, voluptatibus
        nihil! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Doloribus iusto placeat corporis necessitatibus earum esse veritatis
        fugiat. Voluptatibus obcaecati quae esse tempore atque, veritatis vel
        labore commodi. Eum, voluptatibus nihil! Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Doloribus iusto placeat corporis
        necessitatibus earum esse veritatis fugiat. Voluptatibus obcaecati quae
        esse tempore atque, veritatis vel labore commodi. Eum, voluptatibus
        nihil!
      </motion.div>
    </motion>
  );
}
