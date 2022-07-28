import React from "react";
import "./css_files/home.css";
import Header from "./header";
import job from "./images/job-search 1.jpg";
import rectangal from "./images/Rectangle 262.png";
import AdjustIcon from "@material-ui/icons/Adjust";
import candidate from "./images/candidates 1.png";
import teamleader from "./images/team-leader 1.png";
import hire from "./images/hire 1.png";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ellipse from "./images/Ellipse 18.jpg";
import ellipse2 from "./images/Ellipse 19.jpg";
import ellipse3 from "./images/Ellipse 20.jpg";
import ellipse4 from "./images/Ellipse 21.jpg";
import AddIcon from "@material-ui/icons/Add";
import VolumeMuteIcon from "@material-ui/icons/VolumeMute";
import Button from "@material-ui/core/Button";
import SettingsIcon from "@material-ui/icons/Settings";
import line from "./images/Line 10.png";
import { Avatar } from "@material-ui/core";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import vector from "./images/Vector.jpg"
import PermIdentityIcon from '@material-ui/icons/PermIdentity';

const Home = () => {
  return (
    <div className="homepage">
      <div>
        <Header />
      </div>
      <div className="allbox">
        <div className="firstbox">
          <img
            src={job}
            alt=""
            style={{ width: "75.52px", height: "75.52px" }}
          />
          <img src={rectangal} alt="" />
          <div className="underbox">
            <h1>0</h1>
            <h2> Position Activated</h2>
          </div>
          <AdjustIcon />
        </div>
        <div className="firstbox">
          <img src={candidate} alt="" />
          <img src={rectangal} alt="" />
          <div className="underbox">
            <h1>1</h1>
            <h2>New Candidates</h2>
          </div>
          <AdjustIcon />
        </div>
        <div className="firstbox">
          <img src={teamleader} alt="" />
          <img src={rectangal} alt="" />
          <div className="underbox">
            <h1>2</h1>
            <h2>Candidates Progressing</h2>
          </div>
          <AdjustIcon />
        </div>
        <div className="firstbox">
          <img src={hire} alt="" />
          <img src={rectangal} alt="" />
          <div className="underbox">
            <h1>0</h1>
            <h2>Candidates Hired</h2>
          </div>
          <AdjustIcon />
        </div>
      </div>
      <div className="mainmiddle">
        <div className="middalcontent">
          <BusinessCenterIcon />
          <p>
            My Positions
            <ArrowDropDownIcon />
          </p>

          <div>
            {/* start */}
            <div className="middalcontent1">
              <div>
                <p>
                  <FiberManualRecordIcon style={{ color: "#84AC04" }} />
                  Activities Manager - Pawnee
                </p>
                <p>
                  <LocationOnIcon />
                  Remote
                </p>
                <div className="Images">
                  <img src={ellipse} alt="" />
                  <img src={ellipse2} alt="" />
                  <img src={ellipse3} alt="" />
                  <img src={ellipse4} alt="" />
                  <AddIcon />
                </div>
              </div>
              <div>
                <div className="buttons">
                  <div>
                    <Button
                      variant="contained"
                      style={{
                        backgroundColor: "#84AC04",
                        height: "30px",
                        color: "white",
                      }}
                    >
                      <VolumeMuteIcon />
                      <h4>Promote</h4>
                    </Button>
                  </div>
                  <div style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                    <Button
                      variant="contained"
                      style={{
                        backgroundColor: "#84AC04",
                        height: "30px",
                        color: "white",
                        minWidth: "auto",
                      }}
                    >
                      <SettingsIcon />
                    </Button>
                  </div>
                </div>
                <div>
                  <p>Pipeline Candidates</p>
                </div>
              </div>
            </div>
            {/* close */}
            <div style={{ backgroundColor: "white", width: "460px" }}>
              <img src={line} alt="" />
            </div>
            {/* start */}
            <div className="middalcontent1">
              <div>
                <p>
                  <FiberManualRecordIcon style={{ color: "#84AC04" }} />
                  Director Of Parks & Recreation
                </p>
                <p>
                  <LocationOnIcon />
                  Pawnee,IN
                </p>
                <div className="Images">
                  <img src={ellipse} alt="" />
                  <img src={ellipse2} alt="" />
                  <img src={ellipse3} alt="" />
                  <img src={ellipse4} alt="" />
                  <AddIcon />
                </div>
              </div>
              <div>
                <div className="buttons">
                  <div>
                    <Button
                      variant="contained"
                      style={{
                        backgroundColor: "#84AC04",
                        height: "30px",
                        color: "white",
                      }}
                    >
                      <VolumeMuteIcon />
                      <h4>Promote</h4>
                    </Button>
                  </div>
                  <div style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                    <Button
                      variant="contained"
                      style={{
                        backgroundColor: "#84AC04",
                        height: "30px",
                        color: "white",
                        minWidth: "auto",
                      }}
                    >
                      <SettingsIcon />
                    </Button>
                  </div>
                </div>
                <div>
                  <p>Pipeline Candidates</p>
                </div>
              </div>
            </div>
            {/* close */}
            <div style={{ backgroundColor: "white", width: "460px" }}>
              <img src={line} alt="" />
            </div>
            {/* start */}
            <div className="middalcontent1">
              <div>
                <p>
                  <FiberManualRecordIcon style={{ color: "#84AC04" }} />
                  Talent To Consider For Director
                </p>
                <p>
                  <LocationOnIcon />
                  Candidate Pool
                </p>
                <div className="Images">
                  <img src={ellipse} alt="" />
                  <img src={ellipse2} alt="" />
                  <img src={ellipse3} alt="" />
                  <img src={ellipse4} alt="" />
                  <AddIcon />
                </div>
              </div>
              <div>
                <div className="buttons">
                  <div>
                    <Button
                      variant="contained"
                      style={{
                        backgroundColor: "#84AC04",
                        height: "30px",
                        color: "white",
                      }}
                    >
                      <VolumeMuteIcon />
                      <h4>Promote</h4>
                    </Button>
                  </div>
                  <div style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                    <Button
                      variant="contained"
                      style={{
                        backgroundColor: "#84AC04",
                        height: "30px",
                        color: "white",
                        minWidth: "auto",
                      }}
                    >
                      <SettingsIcon />
                    </Button>
                  </div>
                </div>
                <div>
                  <p>Pipeline Candidates</p>
                </div>
              </div>
            </div>
            {/* close */}
            <div style={{ backgroundColor: "white", width: "460px" }}>
              <img src={line} alt="" />
            </div>
            {/* start */}
            <div className="middalcontent1">
              <div>
                <p>
                  <FiberManualRecordIcon style={{ color: "#84AC04" }} />
                  Deputy Director Of Parks And Recreation
                </p>
                <p>
                  <LocationOnIcon />
                  Pawnee ,In
                </p>
                <div className="Images">
                  <img src={ellipse} alt="" />
                  <img src={ellipse2} alt="" />
                  <img src={ellipse3} alt="" />
                  <img src={ellipse4} alt="" />
                  <AddIcon />
                </div>
              </div>
              <div>
                <div className="buttons">
                  <div>
                    <Button
                      variant="contained"
                      style={{
                        backgroundColor: "#84AC04",
                        height: "30px",
                        color: "white",
                      }}
                    >
                      <VolumeMuteIcon />
                      <h4>Promote</h4>
                    </Button>
                  </div>
                  <div style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                    <Button
                      variant="contained"
                      style={{
                        backgroundColor: "#84AC04",
                        height: "30px",
                        color: "white",
                        minWidth: "auto",
                      }}
                    >
                      <SettingsIcon />
                    </Button>
                  </div>
                </div>
                <div>
                  <p>Pipeline Candidates</p>
                </div>
              </div>
            </div>
            {/* close */}
            <div style={{ backgroundColor: "white", width: "460px" }}>
              <img src={line} alt="" />
            </div>
            {/* start */}
            <div className="middalcontent1">
              <div>
                <p>
                  <FiberManualRecordIcon style={{ color: "#84AC04" }} />
                  Paid Intern
                </p>
                <p>
                  <LocationOnIcon />
                  Pawnee ,In
                </p>
                <div className="Images">
                  <img src={ellipse} alt="" />
                  <img src={ellipse2} alt="" />
                  <img src={ellipse3} alt="" />
                  <img src={ellipse4} alt="" />
                  <AddIcon />
                </div>
              </div>
              <div>
                <div className="buttons">
                  <div>
                    <Button
                      variant="contained"
                      style={{
                        backgroundColor: "#84AC04",
                        height: "30px",
                        color: "white",
                      }}
                    >
                      <VolumeMuteIcon />
                      <h4>Promote</h4>
                    </Button>
                  </div>
                  <div style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                    <Button
                      variant="contained"
                      style={{
                        backgroundColor: "#84AC04",
                        height: "30px",
                        color: "white",
                        minWidth: "auto",
                      }}
                    >
                      <SettingsIcon />
                    </Button>
                  </div>
                </div>
                <div>
                  <p>Pipeline Candidates</p>
                </div>
              </div>
            </div>
            {/* close */}
          </div>
        </div>

        {/* middal box start */}
        <div className="middlacontebt6">
          <div className="middalcontent">
            <div>
              <BusinessCenterIcon />
              <p>
                New Candidates
                <ArrowDropDownIcon />
              </p>
            </div>

            <div className="middalbox3">
              <div className="middalbox2">
                <div style={{ paddingTop: "15px" }}>
                  <Avatar
                    style={{
                      backgroundColor: "#1A344B",
                      width: "55px",
                      height: "55px",
                    }}
                  >
                    K
                  </Avatar>
                </div>
                <div className="middal5">
                  <h2 style={{ color: "#1A344B" }}>Kyle May</h2>
                  <p>
                    <BusinessCenterIcon style={{ color: "#1A344B" }} />
                    Deputy Director Of Parks And Recre...
                  </p>
                </div>
              </div>

              <div style={{ backgroundColor: "white", width: "460px" }}>
                <img src={line} alt="" />
              </div>

              <div className="middalbox2">
                <div style={{ paddingTop: "15px" }}>
                  <Avatar
                    style={{
                      backgroundColor: "#1A344B",
                      width: "55px",
                      height: "55px",
                    }}
                  >
                    S
                  </Avatar>
                </div>
                <div className="middal5">
                  <h2 style={{ color: "#1A344B" }}>Syed Samiur Rahman</h2>
                  <p>Head Of Sales Learner Nation</p>
                  <p>
                    <BusinessCenterIcon style={{ color: "#1A344B" }} />
                    Deputy Director Of Parks And Recre....
                  </p>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="middalcontent">
            <CheckBoxIcon style={{ color: "#1A344B" }} />
            <h3>My Tasks</h3>
            <div className="middal10">
              <div>
                <CheckCircleOutlineIcon />
              </div>
              <div>
                <h3>Follow Up With Keysha</h3>
                <div style={{display:"flex"}}>
                  <img src={vector} alt=""/>
                  <p>Due Tomorrow</p>
                  <PermIdentityIcon/>
                  <p>You</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* middal box close */}

        {/* lastbox start */}
        <div className="middalcontent">
          <div>
            <h1>gaurang theshya</h1>
          </div>
        </div>
        {/* last box close */}
      </div>
    </div>
  );
};

export default Home;
