import { motion } from "framer-motion";
export default function FeaturedComponent({ title, details }) {
  return (
    <motion.div className="featured-component" whileHover={{scale: 0.9}} initial={{y: "100px"}} whileInView={{y: 0}}>
      <div className="image"></div>
      <div className="content">
        <h4>{title}</h4>
        <p>{details}</p>
      </div>
    </motion.div>
  );
}
