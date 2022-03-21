import React from "react";
import "./Portpolio.css";

const PortfolioInfoVideo = (props) => {
  return (
    <div>
      <div className="portpolio-info">
        <table>
          <tr>
            <td>
              <iframe
                width="200%"
                height="200%"
                src="https://www.youtube.com/embed/BoixoIrMcmM"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
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
        <p className="portpolio-full-info">{props.fullDescription}</p>
      </div>
    </div>
  );
};

export default PortfolioInfoVideo;
