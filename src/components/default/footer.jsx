import { motion } from "framer-motion";

const pVariants = {
  hover: {
    scale: 1.3,
    originX: 0,
    color: "#f8e112",
    transition: { type: "spring", stiffness: 300 },
  },
};
export default function footer() {
  return (
    <section id="footer">
      <div className="footer-wrapper">
        <div className="newsletter">
          <div>
            <p>Sign up for our newsletter, we promise not to spam you.</p>
          </div>
          <div>
            <form>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
              />
              <input type="button" value="Subscribe" />
            </form>
          </div>
        </div>
        <div className="footer-details">
          <table>
            <tr>
              <th>
                <h2>Lago</h2>
              </th>
            </tr>
          </table>
          <table>
            <tr>
              <th>
                <h2>Products</h2>
              </th>
            </tr>
            <tr>
              <td>
                <motion.p variants={pVariants} whileHover="hover">
                  coupons
                </motion.p>
              </td>
            </tr>
            <tr>
              <td>
                <motion.p variants={pVariants} whileHover="hover">
                  coupons
                </motion.p>
              </td>
            </tr>
            <tr>
              <td>
                <motion.p variants={pVariants} whileHover="hover">
                  coupons
                </motion.p>
              </td>
            </tr>
            <tr>
              <td>
                <motion.p variants={pVariants} whileHover="hover">
                  coupons
                </motion.p>
              </td>
            </tr>
            <tr>
              <td>
                <motion.p variants={pVariants} whileHover="hover">
                  coupons
                </motion.p>
              </td>
            </tr>
            <tr>
              <td>
                <motion.p variants={pVariants} whileHover="hover">
                  coupons
                </motion.p>
              </td>
            </tr>
            <tr>
              <td>
                <motion.p variants={pVariants} whileHover="hover">
                  coupons
                </motion.p>
              </td>
            </tr>
            <tr>
              <td>
                <motion.p variants={pVariants} whileHover="hover">
                  coupons
                </motion.p>
              </td>
            </tr>
            <tr>
              <td>
                <motion.p variants={pVariants} whileHover="hover">
                  coupons
                </motion.p>
              </td>
            </tr>
            <tr>
              <td>
                <motion.p variants={pVariants} whileHover="hover">
                  coupons
                </motion.p>
              </td>
            </tr>
            <tr>
              <td>
                <motion.p variants={pVariants} whileHover="hover">
                  coupons
                </motion.p>
              </td>
            </tr>
            <tr>
              <td>
                <motion.p variants={pVariants} whileHover="hover">
                  coupons
                </motion.p>
              </td>
            </tr>
          </table>
          <table>
            <tr>
              <th>
                <h2>Developers</h2>
              </th>
            </tr>
            <tr>
              <td>
                <motion.p variants={pVariants} whileHover="hover">
                  Github
                </motion.p>
              </td>
            </tr>
            <tr>
              <td>
                <motion.p variants={pVariants} whileHover="hover">
                  Github
                </motion.p>
              </td>
            </tr>
            <tr>
              <td>
                <motion.p variants={pVariants} whileHover="hover">
                  Github
                </motion.p>
              </td>
            </tr>
            <tr>
              <td>
                <motion.p variants={pVariants} whileHover="hover">
                  Github
                </motion.p>
              </td>
            </tr>
            <tr>
              <td>
                <motion.p variants={pVariants} whileHover="hover">
                  Github
                </motion.p>
              </td>
            </tr>
            <tr>
              <td>
                <motion.p variants={pVariants} whileHover="hover">
                  Github
                </motion.p>
              </td>
            </tr>
            <tr>
              <td>
                <motion.p variants={pVariants} whileHover="hover">
                  Github
                </motion.p>
              </td>
            </tr>
            <tr>
              <td>
                <motion.p variants={pVariants} whileHover="hover">
                  Github
                </motion.p>
              </td>
            </tr>
          </table>
          <table>
            <tr>
              <th>
                <h2>Resources</h2>
              </th>
            </tr>
            <tr>
              <td>
                <motion.p variants={pVariants} whileHover="hover">
                  Status
                </motion.p>
              </td>
            </tr>
            <tr>
              <td>
                <motion.p variants={pVariants} whileHover="hover">
                  Status
                </motion.p>
              </td>
            </tr>
            <tr>
              <td>
                <motion.p variants={pVariants} whileHover="hover">
                  Status
                </motion.p>
              </td>
            </tr>
            <tr>
              <td>
                <motion.p variants={pVariants} whileHover="hover">
                  Status
                </motion.p>
              </td>
            </tr>
            <tr>
              <td>
                <motion.p variants={pVariants} whileHover="hover">
                  Status
                </motion.p>
              </td>
            </tr>
          </table>
          <table>
            <tr>
              <th>
                <h2>Company</h2>
              </th>
            </tr>
            <tr>
              <td>
                <motion.p variants={pVariants} whileHover="hover">
                  Hiring
                </motion.p>
              </td>
            </tr>
            <tr>
              <td>
                <motion.p variants={pVariants} whileHover="hover">
                  Hiring
                </motion.p>
              </td>
            </tr>
            <tr>
              <td>
                <motion.p variants={pVariants} whileHover="hover">
                  Hiring
                </motion.p>
              </td>
            </tr>
            <tr>
              <td>
                <motion.p variants={pVariants} whileHover="hover">
                  Hiring
                </motion.p>
              </td>
            </tr>
            <tr>
              <td>
                <motion.p variants={pVariants} whileHover="hover">
                  Hiring
                </motion.p>
              </td>
            </tr>
            <tr>
              <td>
                <motion.p variants={pVariants} whileHover="hover">
                  Hiring
                </motion.p>
              </td>
            </tr>
            <tr>
              <td>
                <motion.p variants={pVariants} whileHover="hover">
                  Hiring
                </motion.p>
              </td>
            </tr>
            <tr>
              <td>
                <motion.p variants={pVariants} whileHover="hover">
                  Hiring
                </motion.p>
              </td>
            </tr>
          </table>
        </div>
        <div className="footer-end"></div>
      </div>
    </section>
  );
}
