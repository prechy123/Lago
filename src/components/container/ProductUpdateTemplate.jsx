import { motion } from "framer-motion";

const childVariants = {
  initial: {
    y: -100,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 2
    }
  },
};

export default function ProductUpdateTemplate({ update }) {
  return (
    <motion.div
      className="featured-component"
      variants={childVariants}
      initial="initial"
      animate="animate"
    >
      <div className="image"></div>
      <div className="content">
        <h4>{update}</h4>
        <button>Read more → </button>
      </div>
    </motion.div>
  );
}
