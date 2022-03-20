import React from "react";
import "./Portpolio.css";
import Avatar from "./Avatar";
import Info from "./Info";
import PortfolioInfo from "./PortfolioInfo";


const Portpolio = () => {
  return (
    <div>
      <div className="main-heading">
        <h1>Portpolio</h1>
        <br />
        <Avatar />
      </div>
      <Info />
      <PortfolioInfo/>
    </div>
  );
};

export default Portpolio;
