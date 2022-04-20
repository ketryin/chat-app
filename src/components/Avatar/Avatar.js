import React from "react";
import defaultAva from "../../assets/default-avatar.jpg";
import "./Avatar.css";

const Avatar = ({ name, avatar }) => {
  return (
    <div className="avatar-conteiner">
      <img className="friend-avatar" src={avatar} alt={name} />
      <span className="fi fi-rr-angle-circle-down avatar-decoretion"></span>
    </div>
  );
};

Avatar.defautProps = {
  avatar: defaultAva,
};
export default Avatar;
