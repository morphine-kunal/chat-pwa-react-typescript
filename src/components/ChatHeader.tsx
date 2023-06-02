import React from "react";
import { ArrowBackIcon, EditIcon } from "@chakra-ui/icons";
import classes from "../style/chatHeader.module.css";

const ChatHeader = () => {
  return (
    <header className={classes["chat-header"]}>
      <div className={classes["chat-name"]}>
        <ArrowBackIcon w={8} h={8} />
        <h1 className={classes.title}>Trip 1</h1>
      </div>
      <div className={classes.edit}>
        <EditIcon w={6} h={6} cursor={'pointer'}/>
      </div>
    </header>
  );
};

export default ChatHeader;
