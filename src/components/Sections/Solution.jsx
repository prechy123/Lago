import GridTextItem from "../container/GridTextItem";
import { motion } from "framer-motion";

const containerVarients = {
  initial: {
    y: "100px",
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 2,
      staggerChildren: 0.1,
    },
  },
};
export default function Solution() {
  return (
    <motion.section id="solution" variants={containerVarients} initial="initial" whileInView="animate">
      <div className="d-solution">
        <div className="d-solution-title">
          <p>The Solution</p>
          <h1>Composable metering and billing</h1>
        </div>
        <div className="g-container">
          <GridTextItem
            para="Usage monitoring"
            title="Plug-and-play metering"
          />
          <div className="g-item"></div>
          <div className="g-item"></div>
          <GridTextItem
            para="Scalable and low-maintenance"
            title="Out-of-the-box billing system"
          />
          
          <GridTextItem
            para="More control"
            title="Composability and security"
          />
          <div className="g-item"></div>
        </div>
      </div>
    </motion.section>
  );
}
