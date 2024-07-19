import React from "react";
import "./UserProfileCard.css";
import profile_icon from "../Assets/muz.jpg";

const UserProfileCard = () => {
  return (
    <div className="upc">
      <div className="gradient"></div>
      <div className="profile-down">
        <img src={profile_icon} alt="profile-image" />
        <div className="profile-title">Thompson Eregha</div>
        <div className="profile-description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam non
          ipsum sint, necessitatibus accusantium quam nesciunt. Hic, veritatis
        </div>
        <div className="profile-button">
          <a href="mailto:thompsoneregha00@gmail.com">Contact Me</a>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
