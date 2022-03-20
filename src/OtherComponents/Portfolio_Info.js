import React from "react";
import "./Portpolio.css";

const Portfolio_Info = () => {
  return (
    <div>
      <div className="portpolio-info">
        <table>
          <tr>
            <td>
              <img
                src="https://media-exp1.licdn.com/dms/image/C5603AQH-T6WdYW8z_Q/profile-displayphoto-shrink_400_400/0/1602423990054?e=1653523200&v=beta&t=YGqGp1f0m68abQzu5-kk0rB-Qels7varP1-YBxXuQio"
                alt="Avatar"
                className="portpolio-images"
              />
            </td>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <td>
              <h3>First Project</h3>
            </td>
            &nbsp; &nbsp;
            <td>
              <h5>This is my first project fdsffd fdsfsf</h5>
            </td>
          </tr>
        </table>
        <p className="portpolio-full-info">
          Full description about this projects
        </p>
      </div>
    </div>
  );
};

export default Portfolio_Info;
