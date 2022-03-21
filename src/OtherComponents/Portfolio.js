import React from "react";
import "./Portpolio.css";
import Avatar from "./Avatar";
import Info from "./Info";
import PortfolioInfo from "./PortfolioInfo";

const Portfolio = () => {
  return (
    <div>
      <div className="main-heading">
        <h1>Portfolio</h1>
        <br />
        <Avatar
          imageUrl="https://media-exp1.licdn.com/dms/image/C5603AQH-T6WdYW8z_Q/profile-displayphoto-shrink_400_400/0/1602423990054?e=1653523200&v=beta&t=YGqGp1f0m68abQzu5-kk0rB-Qels7varP1-YBxXuQio"
          nameAndRole="Sakthivel Developer"
        />
      </div>
      <Info
        Description="Description"
        Content="This is Sakthivel indie developer"
      />
      {/* 1  https://www.youtube.com/watch?v=BoixoIrMcmM*/}
      <PortfolioInfo
        imageUrl="https://media-exp1.licdn.com/dms/image/C5603AQH-T6WdYW8z_Q/profile-displayphoto-shrink_400_400/0/1602423990054?e=1653523200&v=beta&t=YGqGp1f0m68abQzu5-kk0rB-Qels7varP1-YBxXuQio"
        title="Title"
        shortDescription="Short Description"
        fullDescription="Full fkdsfjklfjkl l jfkldjfldjfl jfdlkfjfdljf fjsdklfdjlsfjlfd"
      />

      <PortfolioInfo
        imageUrl="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        title="Title"
        shortDescription="Short Description"
        fullDescription="Full fkdsfjklfjkl l jfkldjfldjfl jfdlkfjfdljf fjsdklfdjlsfjlfd"
      />
      {/* 2 */}
      <PortfolioInfo
        imageUrl="https://media-exp1.licdn.com/dms/image/C5603AQH-T6WdYW8z_Q/profile-displayphoto-shrink_400_400/0/1602423990054?e=1653523200&v=beta&t=YGqGp1f0m68abQzu5-kk0rB-Qels7varP1-YBxXuQio"
        title="Title"
        shortDescription="Short Description"
        fullDescription="Full fkdsfjklfjkl l jfkldjfldjfl jfdlkfjfdljf fjsdklfdjlsfjlfd"
      />
      {/* 3 */}
      <PortfolioInfo
        imageUrl="https://media-exp1.licdn.com/dms/image/C5603AQH-T6WdYW8z_Q/profile-displayphoto-shrink_400_400/0/1602423990054?e=1653523200&v=beta&t=YGqGp1f0m68abQzu5-kk0rB-Qels7varP1-YBxXuQio"
        title="Title"
        shortDescription="Short Description"
        fullDescription="Full fkdsfjklfjkl l jfkldjfldjfl jfdlkfjfdljf fjsdklfdjlsfjlfd"
      />
    </div>
  );
};

export default Portfolio;
