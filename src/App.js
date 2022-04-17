import { useState } from "react";
import "./App.css";
import FriendsList from "./components/FriendList/FriendsList.js";
import SearchBar from "./components/SearchBar/SearchBar.js";
import ActiveChat from "./components/ActiveChat/ActiveChat.js";
function App() {
  const [currentFriendsSearchTerm, setFriendsSearchTerm] = useState("");
  const [currentChatId, setCurrentChatId] = useState(null);

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
          <ActiveChat friendId={currentChatId} />
        </div>
      )}
    </div>
  );
}

export default App;
