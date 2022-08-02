import React from "react";
import NotificationsIcon from "@material-ui/icons/Notifications";
import HelpIcon from "@material-ui/icons/Help";
import "./css_files/header.css";
import Ellipse from "./images/Ellipse 1.jpg";

const Header2 = () => {
  return (
    <div className="header">
      <div>
        <h1>POSITIONS/GROUPS</h1>
      </div>
      <div className="allIcon">
        <NotificationsIcon />
        <HelpIcon />
        <img src={Ellipse} alt="" />
        <div>
          <p>Joshua Bass</p>
        </div>
      </div>
    </div>
  );
};

export default Header2;
