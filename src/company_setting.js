import React from "react";
import "./css_files/companySetting.css";
import ellipse70 from "./images/Ellipse70.png";
import vector20 from "./images/Vector20.png";
import vector79 from "./images/Vector79.png";
import peopel from "./images/peopel.png";
import group from "./images/Group.png";
import user10 from "./images/user10.png";
import ellipse80 from "./images/Ellipse80.png";
import vector80 from "./images/Vector80.png";
import line from "./images/Line 10.png";
import group166 from "./images/Group 166.png";
import SettingsIcon from "@material-ui/icons/Settings";
import line30 from "./images/Line 36.png";
import vector81 from "./images/Vector81.png";

const CompanySetting = () => {
  return (
    <div className="companySetting">
      {/* header start */}
      <div className="leftIcon">
        <div>
          <h1>Company Setting</h1>
        </div>
        <div>
          <img src={ellipse80} alt="" className="image1" />
          <img src={vector80} alt="" style={{ margin: "12px" }} />
        </div>
      </div>
      {/* header close */}

      <div style={{ display: "flex" }}>
        {/* sidebar start */}
        <div className="allLeftIcon">
          <div style={{ display: "flex" }}>
            <div style={{ textIndent: "6px", paddingTop: "20px" }}>
              <img src={ellipse70} alt="" className="image1" />
              <img src={vector20} alt="" className="image2" />
            </div>
            <div
              style={{ display: "flex", fontWeight: "700", fontSize: "19px" }}
            >
              <p>General</p>
            </div>
          </div>

          <div style={{ display: "flex" }}>
            <div style={{ textIndent: "6px", paddingTop: "20px" }}>
              <img src={ellipse70} alt="" className="image1" />
              <img src={user10} alt="" className="image2" />
            </div>
            <div
              style={{ display: "flex", fontWeight: "700", fontSize: "19px" }}
            >
              <p>Users</p>
            </div>
          </div>

          <div style={{ display: "flex" }}>
            <div style={{ textIndent: "6px", paddingTop: "20px" }}>
              <img src={ellipse70} alt="" className="image1" />
              <img src={vector79} alt="" className="image2" />
            </div>
            <div
              style={{ display: "flex", fontWeight: "700", fontSize: "19px" }}
            >
              <p>Permissions</p>
            </div>
          </div>

          <div style={{ display: "flex" }}>
            <div style={{ textIndent: "6px", paddingTop: "20px" }}>
              <img src={ellipse70} alt="" className="image1" />
              <img src={peopel} alt="" className="image2" />
            </div>
            <div
              style={{ display: "flex", fontWeight: "700", fontSize: "19px" }}
            >
              <p>Teams</p>
            </div>
          </div>

          <div style={{ display: "flex" }}>
            <div style={{ textIndent: "6px", paddingTop: "20px" }}>
              <img src={ellipse70} alt="" className="image1" />
              <img src={group} alt="" className="image2" />
            </div>
            <div
              style={{ display: "flex", fontWeight: "700", fontSize: "19px" }}
            >
              <p>Billing</p>
            </div>
          </div>
        </div>
        {/* sidebar stop */}

        {/* middal content start */}
        <div className="middalmain">
          <div
            style={{
              lineHeight: "0px",
              float: "left",
              fontSize: "19px",
            }}
          >
            <h3>General</h3>
          </div>
          <div>
            <img src={line} alt="" style={{ width: "100%" }} />
          </div>
          <div style={{ float: "left", fontSize: "18px" }}>
            <h3>Comapny Name</h3>
            <p style={{ fontSize: "14px" }}>
              Keep it Short And Don't include Things Like "inc"."LLC" Etc{" "}
            </p>
            {/* <input type="Type Here" placeholder="Type Here"/> */}
            <div>
              <img
                src={group166}
                alt=""
                style={{ width: "422px", height: "40px", float: "left" }}
              />
            </div>
          </div>

          <div style={{ float: "left", fontSize: "18px" }}>
            <h3>Comapny Location</h3>
            <p style={{ width: "567px", fontSize: "14px" }}>
              Select The Main Location Of Your Company. Breezy Will Use This To
              Designate Your Primary Timezone For System Emails.
            </p>
            <div>
              <img
                src={group166}
                alt=""
                style={{ width: "422px", height: "40px", float: "left" }}
              />
            </div>
          </div>

          <div>
            <h3>Single sign-On(SSO)</h3>
            <p>Require Employees To Sign in With Your Company's SSO System.</p>
            <div className="buttonhead">
              <div>
                <p>Google Apps</p>
              </div>
              <div>
                <button type="button" className="buttonStyle">
                  <SettingsIcon />
                  Setting{" "}
                </button>
              </div>
            </div>
            <div>
              <img
                src={line30}
                alt=""
                style={{ border: " 0.4px solid #C4C4C4", width: "95%" }}
              />
            </div>

            <div className="buttonhead">
              <div>
                <p>Okta</p>
              </div>
              <div>
                <button type="button" className="buttonStyle">
                  <SettingsIcon />
                  Setting{" "}
                </button>
              </div>
            </div>
            <div>
              <img
                src={line30}
                alt=""
                style={{ border: " 0.4px solid #C4C4C4", width: "95%" }}
              />
            </div>

            <div className="buttonhead">
              <div>
                <p>OneLogin</p>
              </div>
              <div>
                <button type="button" className="buttonStyle">
                  <SettingsIcon />
                  Setting{" "}
                </button>
              </div>
            </div>
            <div>
              <img
                src={line30}
                alt=""
                style={{ border: " 0.4px solid #C4C4C4", width: "95%" }}
              />
            </div>

            <div className="buttonhead">
              <div>
                <p>SAML</p>
              </div>
              <div>
                <button type="button" className="buttonStyle">
                  <SettingsIcon />
                  Setting{" "}
                </button>
              </div>
            </div>
            <div>
              <img
                src={line30}
                alt=""
                style={{ border: " 0.4px solid #C4C4C4", width: "95%" }}
              />
            </div>
          </div>

          <div>
            <div>
              <h3>Employee Auto-Join</h3>
              <p>
                Let Your Employees Use Their Company Email Address To
                Automagically Add Themselves As Members.
              </p>
              <p>Employee Auto-Join</p>
              <p>
                Auto-Join URL :
                <img src={vector81} alt="" style={{ paddingLeft: "10px" }} />
                <a href="" style={{ color: "#4CABCD" }}>
                  http://app.breezy.hr/signup/zenwe
                </a>{" "}
              </p>
            </div>
            <div>
              <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="buttonJoin1">
                  Enabled
                </button>
                <button type="button" className="buttonJoin2">
                  Disabled
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* middal content stop */}
      </div>
    </div>
  );
};

export default CompanySetting;
