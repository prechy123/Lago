import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Header() {
  const headerVariants = {
    initial: {
      x: "150px",
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 2,
        staggerChildren: 0.2, // Adjust the stagger delay as needed
      },
    },
  };
  const headerVariants2 = {
    initial: {
      x: "-150px",
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 2,
        staggerChildren: 0.2, // Adjust the stagger delay as needed
      },
    },
  };
  return (
    <>
      <header>
        <div>
          <motion.ul
            variants={headerVariants}
            initial="initial"
            animate="animate"
          >
            <motion.h2 variants={headerVariants}>
              <Link to="/">Lago</Link>
            </motion.h2>
            <motion.li variants={headerVariants}>
              <Link to="/">Product</Link>
            </motion.li>
            <motion.li variants={headerVariants}>
              <Link to="/">Developers</Link>
            </motion.li>
            <motion.li variants={headerVariants}>
              <Link to="pricing">Pricing</Link>
            </motion.li>
            <motion.li variants={headerVariants}>
              <Link to="/">Integration</Link>
            </motion.li>
            <motion.li variants={headerVariants}>
              <Link to="about">About</Link>
            </motion.li>
          </motion.ul>
        </div>
        <motion.div
          className="nav-right"
          variants={headerVariants2}
          initial="initial"
          animate="animate"
        >
          <motion.button variants={headerVariants2}>Star|3.928</motion.button>
          <motion.button variants={headerVariants2}>Book a demo</motion.button>
        </motion.div>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Header;
