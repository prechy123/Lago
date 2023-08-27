import React from "react";
import Footer from "../default/footer";
import PricingComponent from "../container/PricingComponent";

export default function PricingPlan() {
  return (
    <>
    <section id="pricing">
      <div className="pricing-title">
        <h1>Fair pricing for all</h1>
        <p>No cut on the revenue. No lock-in.</p>
      </div>
      <div className="pricing-comp">
        <PricingComponent
          type="Free"
          price="$0"
          users="10"
          storage="2"
          support="Email"
          button="Sign up for free"
        />
        <PricingComponent
          type="Pro"
          price="$15"
          users="20"
          storage="10"
          support="Priority email"
          button="Get started"
        />
        <PricingComponent
          type="Enterprice"
          price="$29"
          users="30"
          storage="15"
          support="Phone and email"
          button="Contact us"
        />
      </div>
      
    </section>
    <Footer />
    </>
  );
}
