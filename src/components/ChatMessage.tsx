import React from "react";
import classes from "../style/ChatMessage.module.css";

interface MessageProps {
  id: string;
  user_id: string;
  message: string;
  image: string;
  time: string;
}

const ChatMessage: React.FC<MessageProps> = ({
  id,
  user_id,
  message,
  image,
  time,
}) => {
  const iscurrentUser = user_id === "73785ed67d034f6290b0334c6e756433";
  return (
    <div style={{display: 'flex'}}>
      <div className={` ${iscurrentUser ? classes.hideDp : classes.dp}`}>
        <img src={image} alt="dp" style={{borderRadius: '50%'}} />
      </div>
      <div
        className={`${classes.message} ${
          iscurrentUser ? classes.right : classes.left
        }`}
      >
        <div className={classes.messageContent}>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
