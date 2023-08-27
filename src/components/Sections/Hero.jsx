import { motion } from "framer-motion";
const buttonVariants = {
  whileHover: {
    scale: 0.7,
  },
  whileTap: {
    scale: 1.3
  }
};

export default function Hero() {
  return (
    <>
      <section id="hero">
        <div className="l-side">
          <div className="l-side-c">
            <h1>Open-source metering and usage -based billing</h1>
            <p>
              lago offers a self-hosted, scalable and modular architecture for
              metering and usage-based biling, at every stage of your company.
            </p>
          </div>
          <div className="l-side-buttons">
            <motion.button variants={buttonVariants} whileHover="whileHover" whileTap="whileTap"> 
              Book a demo
            </motion.button>
            <motion.button variants={buttonVariants} whileHover="whileHover" whileTap="whileTap">
              Deploy Open Source
            </motion.button>
          </div>
        </div>
        <div className="r-side"></div>
      </section>
    </>
  );
}
