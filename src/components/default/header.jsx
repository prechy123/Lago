import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Header() {
  const headerVariants = {
    initial: {
      y: "-100vh",
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: "String",
        delay: 0.4,
        duration: 3
      },
    },
  };
  return (
    <>
      <motion.header
        variants={headerVariants}
        initial="initial"
        animate="animate"
      >
        <div>
          <ul>
            <h2>
              <Link to="/">Lago</Link>
            </h2>
            <li>
              <Link to="/">Product</Link>
            </li>
            <li>
              <Link to="/">Developers</Link>
            </li>
            <li>
              <Link to="pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/">Integration</Link>
            </li>
            <li>
              <Link to="about">About</Link>
            </li>
          </ul>
        </div>
        <div className="nav-right">
          <button>Star|3.928</button>
          <button>Book a demo</button>
        </div>
      </motion.header>

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Header;
