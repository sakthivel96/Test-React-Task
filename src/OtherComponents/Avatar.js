import React from "react";
import "./Portpolio.css";
import "./SocialMediaIcons.css";

const Avatar = (props) => {
  return (
    <div className="avatar-block">
      <h2> {props.nameAndRole} </h2>
      <img
        src={props.imageUrl} //"https://media-exp1.licdn.com/dms/image/C5603AQH-T6WdYW8z_Q/profile-displayphoto-shrink_400_400/0/1602423990054?e=1653523200&v=beta&t=YGqGp1f0m68abQzu5-kk0rB-Qels7varP1-YBxXuQio"
        alt={props.nameAndRole}
        className="avatar"
      />
      <br />
      <div>
      <br />
        <a href="https://www.linkedin.com/in/sakthivel-panneerselvam-%E2%9C%93-503529149/">
          <img
            src="https://cdn-icons-png.flaticon.com/512/124/124021.png"
            width="6%"
            height="6%"
            alt="LinkedIn"
            className="social-media-icon"
          />
        </a>

        <a href="https://www.linkedin.com/in/sakthivel-panneerselvam-%E2%9C%93-503529149/">
          <img
            src="https://cdn-icons-png.flaticon.com/512/124/124011.png"
            width="6%"
            height="6%"
            alt="LinkedIn"
            className="social-media-icon"
          />
        </a>
        <a href="https://www.linkedin.com/in/sakthivel-panneerselvam-%E2%9C%93-503529149/">
          <img
            src="https://cdn-icons-png.flaticon.com/512/124/124021.png"
            width="6%"
            height="6%"
            alt="LinkedIn"
            className="social-media-icon"
          />
        </a>
      </div>
    </div>
  );
};

export default Avatar;
