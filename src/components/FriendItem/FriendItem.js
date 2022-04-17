import React from "react";
import defaulttAva from "../../assets/default-avatar.jpg";
import Avatar from "../Avatar/Avatar.js";
import "./FriendListItem.css";

const FriendItem = ({ name, avatar }) => {
  return (
    <div className="friend-conteiner">
      <Avatar name={name} avatar={avatar} />
      <div className="text-conteiner">
        <p className="friend-name">{name}</p>
        <p className="friend-message">Message</p>
      </div>
      <p className="message-date">Date</p>
    </div>
  );
};

FriendItem.defaultProps = {
  avatar: defaulttAva,
};

export default FriendItem;
