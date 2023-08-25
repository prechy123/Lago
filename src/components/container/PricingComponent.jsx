import React from "react";

export default function PricingComponent(props) {
  return (
    <div className="pricing-comp-item">
      <div className="item-type">
        <h2>{props.type}</h2>
      </div>
      <h1>{props.price}/mo</h1>
      <p>{props.users} users included</p>
      <p>{props.storage} Gb of storage</p>
      <p>{props.support} support</p>
      <p>Help center access</p>
      <button>{props.button}</button>
    </div>
  );
}