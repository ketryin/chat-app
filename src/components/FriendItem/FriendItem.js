import React from "react";
import Avatar from "../Avatar/Avatar.js";
import moment from "moment";
import "./FriendListItem.css";

const FriendItem = ({ name, avatar, message, date }) => {
  return (
    <div className="friend-conteiner">
      <Avatar name={name} avatar={avatar} />
      <div className="text-conteiner">
        <p className="friend-name">{name}</p>
        <p className="friend-message">{message}</p>
      </div>
      <p className="message-date">
        {date && moment(date).format("MMM D, YYYY")}
      </p>
    </div>
  );
};

export default FriendItem;
