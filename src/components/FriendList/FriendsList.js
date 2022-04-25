import React, { useEffect, useState } from "react";
import FriendItem from "../FriendItem/FriendItem.js";
import friendsData from "../../assets/friends.json";
import { AvatarGenerator } from "random-avatar-generator";
import { processFriendsList } from "../../services/friendsListService.js";
import "./FriendsList.css";

const generator = new AvatarGenerator();

function FriendsList({
  onChatClick,
  searchTerm,
  currentChatId,
  rerenderCounter,
}) {
  const [friends, setFriends] = useState([]);
  const [, setRenderCount] = useState(0);

  useEffect(() => {
    const friendsFromLocalStorage = localStorage.getItem("friends");
    if (friendsFromLocalStorage) {
      setFriends(
        processFriendsList(JSON.parse(friendsFromLocalStorage), searchTerm)
      );
      setRenderCount(rerenderCounter);
      return;
    }

    const friendsWithAvatars = friendsData.map(({ id, name }) => {
      const avatar = generator.generateRandomAvatar();
      return { id, name, avatar };
    });
    localStorage.setItem("friends", JSON.stringify(friendsWithAvatars));
    setFriends(
      processFriendsList(JSON.parse(friendsFromLocalStorage), searchTerm)
    );
  }, [searchTerm, setFriends, rerenderCounter]);

  return (
    <ul className="friends-list">
      {friends.map(({ name, id, avatar, message, date }) => (
        <li
          className={
            currentChatId === id ? "friends-item active" : "friends-item "
          }
          key={id}
          onClick={() => onChatClick(id)}
        >
          <FriendItem
            name={name}
            avatar={avatar}
            message={message && message.substr(0, 12) + "..."}
            date={date}
          />
        </li>
      ))}
    </ul>
  );
}

export default FriendsList;
