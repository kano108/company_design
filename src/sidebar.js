import React from "react";
import logo from "./images/logo.png";
import "./css_files/sidebar.css";
import SettingsIcon from "@material-ui/icons/Settings";
import HomeIcon from "@material-ui/icons/Home";
import MailIcon from "@material-ui/icons/Mail";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import CalendarTodaySharpIcon from "@material-ui/icons/CalendarTodaySharp";
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
import briefcase from "./images/briefcase 2.png";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import AddCircleIcon from "@material-ui/icons/AddCircle";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_img">
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          <h1>ZENWE</h1>
        </div>
        <div>
          <SettingsIcon className="setting" />
        </div>
      </div>
      <div>
        <span className="sidebarIcon">
          <HomeIcon /> Dashboard
        </span>
        <span className="sidebarIcon">
          <MailIcon /> Inbox
        </span>
        <span className="sidebarIcon">
          <EventAvailableIcon /> Tasks
        </span>
        <span className="sidebarIcon">
          <CalendarTodaySharpIcon /> Calender
        </span>
        <span className="sidebarIcon">
          <SignalCellularAltIcon /> Reports
        </span>
        <span className="sidebarIcon">
          <img
            src={briefcase}
            alt=""
            style={{ width: "20px", height: "20px"}}
          />
          Positions
          <AddCircleIcon
            className="plushIcon"
          />
        </span>
        <span className="sidebarIcon">
          <PermIdentityIcon /> Candidates
          <AddCircleIcon
           className="plushIcon" 
          />
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
