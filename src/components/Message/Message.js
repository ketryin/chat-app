import moment from "moment";
import "./Message.css";

const Message = ({ text, type, date }) => {
  return (
    <div className="textBox">
      <p
        className={type ? "in-message message-box" : "out-message message-box"}
      >
        {text}
      </p>
      <div className={type ? "date-message" : "date-message out-date-message"}>
        {moment(date).format("Y/D/M, h:mm a")}
      </div>
    </div>
  );
};

export default Message;
