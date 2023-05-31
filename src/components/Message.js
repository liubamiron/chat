import React from "react";
import { auth } from "../index";
import { useAuthState } from "react-firebase-hooks/auth";
const Message = ({ message }) => {
  const [user] = useAuthState(auth);

  return (
    <div
      className={`chat_box ${message.uid === user.uid ? "right" : "left"}`}>
     {/* <img
        className="chat_box__left"
        src={message.photoURL}
        alt="user avatar"
      /> */}
      <div>
        <div className="user-message">{message.text}</div>
      </div>
    </div>
  );
};
export default Message;