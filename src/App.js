import { useEffect, useRef, useState } from "react";
import "./App.css";
import FriendsList from "./components/FriendList/FriendsList.js";
import SearchBar from "./components/SearchBar/SearchBar.js";
import ActiveChat from "./components/ActiveChat/ActiveChat.js";
import MessageInput from "./components/MessageInput/MessageInput.js";
import { getAnswer } from "./api/chucknorris-api.js";

function App() {
  const USER_ID = 100;

  const [currentFriendsSearchTerm, setFriendsSearchTerm] = useState("");
  const [currentChatId, setCurrentChatId] = useState(null);
  const [currentMessages, setCurrentMessages] = useState([]);
  const getAnswerTimeoutRef = useRef(null);
  const isGetAnswerTimeoutFinished = useRef(true);

  useEffect(() => {
    if (isGetAnswerTimeoutFinished.current) {
      clearTimeout(getAnswerTimeoutRef.current);
    }
  }, []);

  const addMessage = (messageText) => {
    const message = {
      userId: USER_ID,
      message: messageText,
      date: new Date(),
      isIncoming: false,
    };
    const newMessages = [...currentMessages, message];
    setCurrentMessages(newMessages);

    if (!isGetAnswerTimeoutFinished.current) {
      return;
    }

    isGetAnswerTimeoutFinished.current = false;
    getAnswerTimeoutRef.current = setTimeout(() => {
      getAnswer().then((answerText) => {
        const answer = {
          userId: currentChatId,
          message: answerText,
          date: new Date(),
          isIncoming: true,
        };

        isGetAnswerTimeoutFinished.current = true;
        setCurrentMessages((messages) => [...messages, answer]);
      });
    }, 1000);
  };

  return (
    <div className="wrapper">
      <aside>
        <SearchBar onSearchTermChanged={setFriendsSearchTerm} />
        <h1 className="title">CHATS</h1>
        <FriendsList
          searchTerm={currentFriendsSearchTerm}
          onChatClick={setCurrentChatId}
          currentChatId={currentChatId}
        />
      </aside>
      {currentChatId && (
        <div className="activeChat">
          <ActiveChat friendId={currentChatId} messages={currentMessages} />
          <MessageInput onInputChanged={addMessage} />
        </div>
      )}
    </div>
  );
}

export default App;
