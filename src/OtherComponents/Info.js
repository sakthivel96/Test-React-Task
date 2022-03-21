import React from "react";
import "./Portpolio.css";

const Info = (props) => {
  return (
    <div className="info-text-block">
      <h3>{props.Description}</h3>
      <p>{props.Content}</p>
    </div>
  );
};

export default Info;
