import { useEffect, useState } from "react";
import Avatar from "../Avatar/Avatar.js";
import Message from "../Message/Message.js";
import AlwaysScrollToBottom from "../AlwaysScrollToBottom/AlwaysScrollToBottom.js";
import "./ActiveChat.css";

function ActiveChat({ friendId, messages }) {
  const [currentFriendName, setcurrentFriendName] = useState("");
  const [currentFriendAvatar, setcurrentFriendAvatar] = useState("");

  useEffect(() => {
    const friends = JSON.parse(localStorage.getItem("friends"));
    const friend = friends.find(({ id }) => id === friendId);

    setcurrentFriendName(friend.name);
    setcurrentFriendAvatar(friend.avatar);
  }, [friendId]);

  return (
    <>
      <div className="activeChat-conteiner">
        <Avatar name={currentFriendName} avatar={currentFriendAvatar} />
        <h2 className="activeChat-title">{currentFriendName}</h2>
      </div>
      <div className="chat-conteiner">
        {messages.map(({ message, date, isIncoming }) => (
          <Message key={message} text={message} type={isIncoming} date={date} />
        ))}
        <AlwaysScrollToBottom />
      </div>
    </>
  );
}

export default ActiveChat;
