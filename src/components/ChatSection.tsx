import React, { useState, useEffect, useRef } from "react";
import send from "../assets/icons/Icon-1.png";
import attachment from "../assets/icons/Icon.png";
import camera from "../assets/icons/camera.png";
import more from "../assets/icons/more.png";
import video from "../assets/icons/video.png";

import ChatMessage from "./ChatMessage";
import classes from "../style/ChatSection.module.css";

interface Message {
  id: string;
  message: string;
  sender: {
    image: string;
    is_kyc_verified: boolean;
    self: boolean;
    user_id: string;
  };
  time: string;
}

const ChatSection: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [page, setPage] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const lastMessageref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://qa.corider.in/assignment/chat?page=${page}`
        );
        const data = await response.json();
        console.log(data);

        if (Array.isArray(data.chats)) {
          setMessages((prevMessage) => [...prevMessage, ...data.chats]);
          setIsLoading(false);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [page]);

  const [isAttachmentVisble, setIsAttachmentVissible] = useState(false);

  const toggleAttachmentHandler = () => {
    setIsAttachmentVissible(!isAttachmentVisble);
  };

  const pageHandler = () => {
    setPage((prevPage) => prevPage + 1);

    console.log(page);
  };

  const scrollToLastMessage = () => {
    if (messages.length > 0 && lastMessageref.current) {
      lastMessageref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToLastMessage();
  }, [messages]);

  const groupMessagesByDate = (messages: Message[]) => {
    const groupedMessage: { [date: string]: Message[] } = {};

    messages.forEach((message) => {
      const date = new Date(message.time);
      const day = date.getDate().toString().padStart(2, "0");
      const month = date.toLocaleString("default", { month: "long" });
      const year = date.getFullYear().toString();

      const formattedDay = `${day} ${month},${year}`;
      console.log(date);

      if (!groupedMessage[formattedDay]) {
        groupedMessage[formattedDay] = [];
      }
      groupedMessage[formattedDay].push(message);
    });
    return groupedMessage;
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "-20px",
          fontSize: "0.7em",
        }}
      >
        <button onClick={pageHandler}>Load More</button>
      </div>
      <div className={classes.container}>
        {Object.entries(groupMessagesByDate(messages)).map(
          ([date, messagesByDate]) => (
            <div key={date}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className={classes.line} />
                <div style={{ display: "flex",justifyContent: 'center', width:'100%'}}>
                  <div className={classes.h2}>{date}</div>
                </div>
                <div className={classes.line} />
              </div>
              <div style={{ display: "flex", flexDirection: "column-reverse" }}>
                {messagesByDate.map((message: any) => (
                  <ChatMessage
                    key={message.id}
                    id={message.id}
                    user_id={message.sender.user_id}
                    image={message.sender.image}
                    message={message.message}
                    time={message.time}
                  />
                ))}
              </div>
            </div>
          )
        )}

        <div ref={lastMessageref}></div>

        <div className={classes.inputContainer}>
          <input type="text" placeholder="Reply to @Rohit Yadav" />
        </div>

        <div className={classes.iconContainer}>
          <img src={send} alt="send" />
          <img
            src={attachment}
            alt="attachment"
            onClick={toggleAttachmentHandler}
          />
        </div>

        {isAttachmentVisble && (
          <div className={classes.attachment}>
            <img src={camera} alt="camera" />
            <img src={video} alt="video" />
            <img src={more} alt="more" />
          </div>
        )}
        {isLoading && <p>Loading...</p>}
      </div>
    </>
  );
};

export default ChatSection;
