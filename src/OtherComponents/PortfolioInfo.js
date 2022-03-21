import React from "react";
import "./Portpolio.css";

const PortfolioInfo = (props) => {
  return (
    <div>
      <div className="portpolio-info">
        <table>
          <tr>
            <td>
              <img
                src={props.imageUrl}
                alt="Avatar"
                className="portpolio-images"
              />
            </td>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <td>
              <h3>{props.title}</h3>
            </td>
            &nbsp; &nbsp;
            <td>
              <h5>{props.shortDescription}</h5>
            </td>
          </tr>
        </table>
        <p className="portpolio-full-info">
          {props.fullDescription}
        </p>
      </div>
    </div>
  );
};

export default PortfolioInfo;
