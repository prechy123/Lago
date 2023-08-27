import { motion } from "framer-motion";
const buttonVariants = {
  whileHover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255, 255, 255)",
  },
};
const containerVarients = {
  initial: {
    x: "100vw",
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.3,
    },
  },
};

export default function Hero() {
  return (
    <>
      <motion.section id="hero" variants={containerVarients} initial="initial" animate="animate">
        <div className="l-side">
          <div className="l-side-c">
            <h1>Open-source metering and usage -based billing</h1>
            <p>
              lago offers a self-hosted, scalable and modular architecture for
              metering and usage-based biling, at every stage of your company.
            </p>
          </div>
          <div className="l-side-buttons">
            <motion.button variants={buttonVariants} whileHover="whileHover">
              Book a demo
            </motion.button>
            <motion.button variants={buttonVariants} whileHover="whileHover">
              Deploy Open Source
            </motion.button>
          </div>
        </div>
        <motion.div className="r-side"></motion.div>
      </motion.section>
    </>
  );
}
