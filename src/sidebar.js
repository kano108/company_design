import React from "react";
// import {Model,ModalHeader} from "reactstrap";
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
import Popup from "reactjs-popup";
import ellipse50 from "./images/ellipse50.png";
import HelpIcon from "@material-ui/icons/Help";
import KeyboardIcon from "@material-ui/icons/Keyboard";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import line50 from "./images/Line 10.png";
import vector50 from "./images/Vector50.png";
import vector51 from "./images/Vector51.png";
import vector52 from "./images/Vector52.png";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import vector53 from "./images/Vector53.png";
import vector54 from "./images/Vector54.png";
import vector55 from "./images/Vector55.png";
import vector56 from "./images/Vector56.png";
import vector57 from "./images/Vector57.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {
  const [bgcolor , setBgcolor] = useState(true)

 

  return (

    <div className="sidebar">
      <div className="sidebar_img">
        <img src={logo} alt="" />
        <h1
          style={{
            paddingTop: "25px",
            position: "absolute",
            paddingLeft: "82px",
          }}
        >
          ZENWE
        </h1>

        <div style={{ padding: "20px" }}>
          {/* <SettingsIcon className="setting" onClick={() => setModel(true)} /> */}
          {/* <SettingsIcon className="setting" /> */}

          <Popup
            trigger={<SettingsIcon className="setting" />}
            position="right center"
          >
            <div className="popupmodel1">
              <div className="popupmodel">
                <div className="modelcontent">
                  <div>
                    <img src={ellipse50} alt="" />
                  </div>
                  <div>
                    <h3> Ron Swanson</h3>
                    <p>jbass@lenty.ag</p>
                  </div>
                </div>

                <div className="modelcontent">
                  <div>
                    <PermIdentityIcon />
                  </div>
                  <div>
                    <p>User Setting</p>
                  </div>
                </div>

                <div className="modelcontent">
                  <div>
                    <HelpIcon />
                  </div>
                  <div>
                    <p>Helps & Documentation</p>
                  </div>
                </div>

                <div className="modelcontent">
                  <div>
                    <KeyboardIcon />
                  </div>
                  <div>
                    <p>Keyboard Shortcuts</p>
                  </div>
                </div>

                <div className="modelcontent">
                  <div>
                    <ExitToAppIcon />
                  </div>
                  <div>
                    <p>Sign Out</p>
                  </div>
                </div>

                <div style={{}}>
                  <img
                    src={line50}
                    alt=""
                    style={{
                      width: "-webkit-fill-available",
                      border: "0.5px solid #C4C4C4",
                    }}
                  />
                </div>

                <div className="modelcontent">
                  <div>
                    <img src={ellipse50} alt="" />
                  </div>
                  <div>
                    <h3>Plenty</h3>
                    <p>https://zenwe.breezy.hr/</p>
                  </div>
                </div>

                <div className="modelcontent">
                  <div>
                    <img src={vector50} alt="" />
                  </div>
                  <div>
                    <p>Company Settings</p>
                  </div>
                </div>

                <div className="modelcontent">
                  <div>
                    <SettingsIcon />
                  </div>
                  <div>
                    <p>Recruiting Preferences</p>
                  </div>
                  <div>
                    <ArrowRightIcon />
                  </div>
                </div>

                <div className="modelcontent">
                  <div>
                    <MailIcon />
                  </div>
                  <div>
                    <p>Invite Members</p>
                  </div>
                </div>

                <div className="modelcontent">
                  <div>
                    <img src={vector51} alt="" />
                  </div>
                  <div>
                    <p>Billing Details</p>
                  </div>
                </div>

                <div className="modelcontent">
                  <div>
                    <img src={vector52} alt="" />
                  </div>
                  <div>
                    <p>Manage Subscriptions</p>
                  </div>
                </div>

                <div style={{}}>
                  <img
                    src={line50}
                    alt=""
                    style={{
                      width: "-webkit-fill-available",
                      border: "0.5px solid #C4C4C4",
                    }}
                  />
                </div>

                <div className="modelcontent">
                  <div>
                    <img src={vector53} alt="" />
                  </div>
                  <div>
                    <p>Feature Requests</p>
                  </div>
                </div>

                <div className="modelcontent">
                  <div>
                    <img src={vector54} alt="" />
                  </div>
                  <div>
                    <p>Live Demo</p>
                  </div>
                </div>

                <div className="modelcontent">
                  <div>
                    <img src={vector55} alt="" />
                  </div>
                  <div>
                    <p>Product Updates</p>
                  </div>
                </div>

                <div className="modelcontent">
                  <div>
                    <img src={vector56} alt="" />
                  </div>
                  <div>
                    <p>Refer a friend</p>
                  </div>
                  <div>
                    <ArrowRightIcon />
                  </div>
                </div>

                <div style={{}}>
                  <img
                    src={line50}
                    alt=""
                    style={{
                      width: "-webkit-fill-available",
                      border: "0.5px solid #C4C4C4",
                    }}
                  />
                </div>

                <div className="modelcontent">
                  <div>
                    <img src={vector57} alt="" />
                  </div>
                  <div>
                    <p>Add Company</p>
                  </div>
                </div>
              </div>
            </div>
          </Popup>
        </div>
      </div>
      <div>
      
      {
        bgcolor ?  <NavLink to="/" onClick={()=>setBgcolor(true)}>
                    <span className="sidebarIcon">
                    <HomeIcon /> Dashboard
                    </span>
                    </NavLink>

                :   <NavLink to="/" onClick={()=>setBgcolor(false)}>
                    <span>
                    <HomeIcon /> Dashboard
                    </span>
                    </NavLink>

      } 
       

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

        <NavLink to="/position">
          <span className="sidebarIcon">
            <div style={{ display: "flex" }}>
              <img
                src={briefcase}
                alt=""
                style={{ width: "20px", height: "20px" }}
              />
              Position
              <AddCircleIcon className="plushIcon" />
            </div>
          </span>
        </NavLink>

        <span className="sidebarIcon">
          <PermIdentityIcon /> Candidates
          <AddCircleIcon className="plushIcon" />
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
