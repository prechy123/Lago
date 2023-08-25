import React from "react";

export default function TeamComponent({name, position}) {
  return (
    <div className="TeamComponent">
      <div className="TeamComponent-pic"></div>
      <div className="TeamComponent-name">
        <h4>{name}</h4>
        <p>{position}</p>
      </div>
    </div>
  );
}
