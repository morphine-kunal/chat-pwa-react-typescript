import React from "react";
import { IoEllipsisVerticalSharp } from "react-icons/io5";
import classes from "../style/ChatDescription.module.css";
import dp12 from "../assets/displaypic/Rectangle 12.png";
import dp13 from "../assets/displaypic/Rectangle 13.png";
import dp14 from "../assets/displaypic/Rectangle 14.png";
import dp15 from "../assets/displaypic/Rectangle 15.png";

const ChatDescription = () => {
  return (
    <React.Fragment>
      <div className={classes.nav}>
        <div className={classes["location-container"]}>
          <div className={classes.dp}>
            <img src={dp12} alt="dp12" />
            <img src={dp13} alt="dp12" />
            <img src={dp14} alt="dp12" />
            <img src={dp15} alt="dp12" />
          </div>

          <div className={classes.fromTo}>
            <p>
              From <b>IGI Airport, T3</b>
            </p>
            <p>
              To <b>Sector 28</b>
            </p>
          </div>
        </div>
        <IoEllipsisVerticalSharp />
      </div>
      <hr className={classes.seperator}></hr>
    </React.Fragment>
  );
};

export default ChatDescription;
