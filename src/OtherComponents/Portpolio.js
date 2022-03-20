import React from "react";
import "./Portpolio.css";
import Avatar from "./Avatar";
import Info from "./Info";
import Portfolio_Info from "./Portfolio_Info";


const Portpolio = () => {
  return (
    <div>
      <div className="main-heading">
        <h1>Portpolio</h1>
        <br />
        <Avatar />
      </div>
      <Info />
      <Portfolio_Info/>
    </div>
  );
};

export default Portpolio;
