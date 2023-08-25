import React from "react";

export default function GridTextItem(props) {
  return (
    <div className="q-item">
      <p>{props.para}</p>
      <h1>{props.title}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
        nostrum soluta. Ullam in reiciendis harum? Consequatur quibusdam tempora
        sint, rerum nulla cupiditate fugiat laudantium, tempore autem itaque
        architecto, illum quam.
      </p>
    </div>
  );
}
