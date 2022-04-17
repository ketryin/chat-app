import React, { useEffect, useState } from "react";
import FriendItem from "../FriendItem/FriendItem.js";
import friendsData from "../../assets/friends.json";
import { AvatarGenerator } from "random-avatar-generator";
import "./FriendsList.css";

const generator = new AvatarGenerator();

const filterBySearchTerm = (friendsList, searchTerm) => {
  if (searchTerm) {
    return friendsList.filter(({ name }) =>
      name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  return friendsList;
};

function FriendsList({ onChatClick, searchTerm, currentChatId }) {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const friendsFromLocalStorage = localStorage.getItem("friends");
    if (friendsFromLocalStorage) {
      setFriends(
        filterBySearchTerm(JSON.parse(friendsFromLocalStorage), searchTerm)
      );
      return;
    }

    const friendsWithAvatars = friendsData.map(({ id, name }) => {
      const avatar = generator.generateRandomAvatar();
      return { id, name, avatar };
    });
    localStorage.setItem("friends", JSON.stringify(friendsWithAvatars));
    setFriends(filterBySearchTerm(friendsWithAvatars, searchTerm));
  }, [searchTerm, setFriends]);

  return (
    <ul className="friends-list">
      {friends.map(({ name, id, avatar }) => (
        <li
          className={
            currentChatId === id ? "friends-item active" : "friends-item "
          }
          key={id}
          onClick={() => onChatClick(id)}
        >
          <FriendItem name={name} avatar={avatar} />
        </li>
      ))}
    </ul>
  );
}

export default FriendsList;
