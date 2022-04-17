import { useEffect, useState } from "react";
import Avatar from "../Avatar/Avatar";
import "./ActiveChat.css";

function ActiveChat({ friendId }) {
  const [currentFriendName, setcurrentFriendName] = useState("");
  const [currentFriendAvatar, setcurrentFriendAvatar] = useState("");

  useEffect(() => {
    const friends = JSON.parse(localStorage.getItem("friends"));
    const friend = friends.find(({ id }) => id === friendId);

    setcurrentFriendName(friend.name);
    setcurrentFriendAvatar(friend.avatar);
  }, [friendId]);

  return (
    <div className="activeChat-conteiner">
      <Avatar name={currentFriendName} avatar={currentFriendAvatar} />
      <h2 className="activeChat-title">{currentFriendName}</h2>
    </div>
  );
}

export default ActiveChat;
