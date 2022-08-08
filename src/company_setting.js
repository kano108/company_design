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
          <div style={{ lineHeight: "0px", float: "left", fontSize: "19px",textAlignLast: "start"  }}>
            <h4>General</h4>
          </div>
          <div>
            <img src={line} alt="" style={{ width: "100%" }} />
          </div>
          <div style={{ float: "left", fontSize: "18px" }}>
            <h5 style={{ textAlignLast: "start" }}>Comapny Name</h5>
            <p style={{ textAlignLast: "start",fontSize: "14px" }}>
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
            <h5 style={{ textAlignLast: "start" }}>Comapny Location</h5>
            <p  style={{ textAlignLast: "start",width:"567px" }}>
              Select The Main Location Of Your Company. Breezy Will Use This To
              Designate Your Primary Timezone For System Emails.
            </p>
          </div>
        </div>

        {/* middal content stop */}
      </div>
    </div>
  );
};

export default CompanySetting;
