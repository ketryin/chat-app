import { useState } from "react";
import "./MessageInput.css";
function MessageInput({ onInputChanged }) {
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onInputChanged(message);
    reset();
  };
  const handleChange = (e, setMessage) => {
    const { value } = e.currentTarget;
    setMessage(value);
  };
  const reset = () => {
    setMessage("");
  };

  return (
    <div className="messageInput-container">
      <form className="messageInput-form" onSubmit={handleSubmit}>
        <input
          className="messageInput-input"
          type="text"
          placeholder="Type your message"
          onChange={(e) => handleChange(e, setMessage)}
          value={message}
        />
        <button type="submit" className="messageInpu-button">
          <i className="fi fi-rr-paper-plane"></i>
        </button>
      </form>
    </div>
  );
}

export default MessageInput;
