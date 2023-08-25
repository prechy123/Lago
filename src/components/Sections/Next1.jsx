import React from "react";
import logo from "./img/index.png";
import logo2 from "./img/logo.jpg";
import ProblemContainer from "../container/problemContainer";

export default function Next1() {
  return (
    <section id="next1">
      <div className="brands">
        <p>With developer signup from the world's leading brands</p>
        <div>
          <img src={logo} alt="Logo" width={100} />
          <img src={logo2} alt="Logo" width={100} />
          <img src={logo} alt="Logo" width={100} />
          <img src={logo2} alt="Logo" width={100} />
          <img src={logo} alt="Logo" width={100} />
          <img src={logo2} alt="Logo" width={100} />
          <img src={logo} alt="Logo" width={100} />
          <img src={logo2} alt="Logo" width={100} />
          <img src={logo} alt="Logo" width={100} />
          <img src={logo2} alt="Logo" width={100} />
        </div>
      </div>
      <div className="the-problem">
        <div className="the-problem-child">
          <h4>The problem</h4>
          <h1>
            Metering and billing are still <br />
            nightmares
          </h1>
          <p>
            Numerous edge cases. Constant pricing changes. Looming scalability
            issues.
          </p>
        </div>
        <div className="prob">
          <ProblemContainer title="For Engineers" />
          <ProblemContainer title="For Revenue leaders" />
          <ProblemContainer title="For Finance teams" />
        </div>
      </div>
    </section>
  );
}
