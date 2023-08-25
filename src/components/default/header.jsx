import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
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
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Header;
