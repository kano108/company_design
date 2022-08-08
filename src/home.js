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
import vector from "./images/Vector.jpg";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import vector1 from "./images/Vector.png";
import Ellipse29 from "./images/Ellipse 29.png";
import MailIcon from "@material-ui/icons/Mail";
import ellipse30 from "./images/Ellipse 30.png";
import ellipse31 from "./images/Ellipse 31.png";
import ellipse32 from "./images/Ellipse 32.png";
import rectangle200 from "./images/Rectangle 200.png";
import ellipse33 from "./images/Ellipse 33.png";
import ellipse34 from "./images/Ellipse 34.png";
import Sidebar from "./sidebar";

const Home = () => {
  return (
    <div className="homepage">
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex" }}>
          <Sidebar />
        </div>

        <div style={{ width: "-webkit-fill-available" }}>
          <Header />

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
              <div className="con_header">
                <BusinessCenterIcon style={{ paddingRight: "10px" }} />
                <p>
                  My Positions
                  <ArrowDropDownIcon />
                </p>
              </div>

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
                      <div
                        style={{ paddingLeft: "10px", paddingRight: "10px" }}
                      >
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
                      <div
                        style={{ paddingLeft: "10px", paddingRight: "10px" }}
                      >
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
                      <div
                        style={{ paddingLeft: "10px", paddingRight: "10px" }}
                      >
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
                      <div
                        style={{ paddingLeft: "10px", paddingRight: "10px" }}
                      >
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
                      <div
                        style={{ paddingLeft: "10px", paddingRight: "10px" }}
                      >
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
              <div className="middalcontent" style={{ paddingBottom: "44%" }}>
                <div className="con_header">
                  <BusinessCenterIcon style={{ paddingRight: "10px" }} />
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
              <div className="middalcontent" style={{ paddingBottom: "60%" }}>
                <div className="con_header">
                  <CheckBoxIcon
                    style={{ color: "#1A344B", paddingRight: "10px" }}
                  />
                  <h3>My Tasks</h3>
                </div>
                <div className="middal10">
                  <div style={{ paddingLeft: "20px", paddingTop: "20px" }}>
                    <CheckCircleOutlineIcon />
                  </div>
                  <div style={{ paddingLeft: "20px" }}>
                    <h3>Follow Up With Keysha</h3>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                      }}
                    >
                      <img
                        src={vector}
                        alt=""
                        style={{ height: "20px", paddingTop: "17px" }}
                      />
                      <p>Due Tomorrow</p>
                      <PermIdentityIcon style={{ paddingTop: "15px" }} />
                      <p>You</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* middal box close */}

            {/* lastbox start */}
            <div>
              <div className="middalcontent">
                <div style={{ display: "flex" }}>
                  <div style={{ display: "grid" }}>
                    <img src={vector1} alt="" style={{ paddingTop: "15px" }} />
                    <img
                      src={Ellipse29}
                      alt=""
                      style={{ paddingTop: "130px" }}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "baseline",
                    }}
                  >
                    <p>My Agenda</p>
                    <p
                      style={{
                        textTransform: "capitalize",
                        width: "300px",
                        fontSize: "17.5px",
                      }}
                    >
                      syed samiur rahman meeting (deputy director of parks and
                      recreation)
                    </p>
                    <div style={{ display: "flex" }}>
                      <img
                        src={vector}
                        alt=""
                        style={{ height: "20px", paddingTop: "18px" }}
                      />
                      <p>12:15 PM (EDT)</p>
                    </div>
                  </div>
                  {/* <img src={Ellipse29} alt="" /> */}
                </div>
              </div>

              <br />

              <div className="middalcontent">
                <div className="con_header">
                  <MailIcon style={{ paddingRight: "10px" }} />
                  <p>
                    All Conversation
                    <ArrowDropDownIcon />
                  </p>
                </div>
                <div>
                  <div
                    style={{
                      display: "flex",
                      backgroundColor: "white",
                      width: "460px",
                      height: "80px",
                    }}
                  >
                    <div>
                      <img src={ellipse30} alt="" style={{ padding: "10px" }} />
                    </div>
                    <div style={{ textAlign: "start" }}>
                      <p>Ron Swanson</p>
                      <p>Agreed Why Would Anybody Ever Eat Anything Besides</p>
                    </div>
                    <div style={{ width: "70px", display: "flex" }}>
                      <p style={{}}>28d Ago</p>
                    </div>
                  </div>
                </div>

                <div style={{ backgroundColor: "white", width: "460px" }}>
                  <img src={line} alt="" />
                </div>

                <div>
                  <div
                    style={{
                      display: "flex",
                      backgroundColor: "white",
                      width: "460px",
                    }}
                  >
                    <div>
                      <img src={ellipse31} alt="" style={{ padding: "10px" }} />
                    </div>
                    <div style={{ textAlign: "start" }}>
                      <p>Sandra Sosa</p>
                      <p>test sandra sosa lorem ipsum is a dummy</p>
                    </div>
                    <div style={{ width: "70px", display: "flex" }}>
                      <p style={{}}>1mo ago</p>
                    </div>
                  </div>
                </div>

                <div style={{ backgroundColor: "white", width: "460px" }}>
                  <img src={line} alt="" />
                </div>

                <div>
                  <div
                    style={{
                      display: "flex",
                      backgroundColor: "white",
                      width: "460px",
                    }}
                  >
                    <div>
                      <img src={ellipse32} alt="" style={{ padding: "10px" }} />
                      <div style={{ paddingLeft: "10px" }}>
                        <Avatar
                          style={{
                            backgroundColor: "#1A344B",
                            width: "25px",
                            height: "25px",
                          }}
                        >
                          L
                        </Avatar>
                      </div>
                    </div>
                    <div style={{ textAlign: "start" }}>
                      <p>Syed Saimur Rahman</p>
                      <p>Head of Sales learner nation</p>
                      <div
                        style={{
                          display: "flex",
                          height: "30px",
                          alignItems: "center",
                        }}
                      >
                        <img
                          src={rectangle200}
                          alt=""
                          style={{ height: "inherit" }}
                        />
                        <p style={{ fontSize: "medium" }}>
                          hi, syed, you re confirmed for the following inter....
                        </p>
                      </div>
                    </div>
                    <div style={{ width: "70px", display: "flex" }}>
                      <p style={{}}>5h ago</p>
                    </div>
                  </div>
                </div>

                <div style={{ backgroundColor: "white", width: "460px" }}>
                  <img src={line} alt="" />
                </div>

                <div>
                  <div
                    style={{
                      display: "flex",
                      backgroundColor: "white",
                      width: "460px",
                    }}
                  >
                    <div>
                      <img src={ellipse33} alt="" style={{ padding: "10px" }} />
                      <div style={{ paddingLeft: "10px" }}>
                        <Avatar
                          style={{
                            backgroundColor: "#1A344B",
                            width: "25px",
                            height: "25px",
                          }}
                        >
                          K
                        </Avatar>
                      </div>
                    </div>
                    <div style={{ textAlign: "start" }}>
                      <p>Lindsay Fernadez</p>
                      <p>senior project manager vizergy</p>
                      <div
                        style={{
                          display: "flex",
                          height: "30px",
                          alignItems: "center",
                        }}
                      >
                        <img
                          src={rectangle200}
                          alt=""
                          style={{ height: "inherit" }}
                        />
                        <p style={{ fontSize: "medium" }}>
                          hi, lindsey please sign.
                        </p>
                      </div>
                    </div>
                    <div style={{ width: "70px", display: "flex" }}>
                      <p style={{}}>5h ago</p>
                    </div>
                  </div>
                </div>

                <div style={{ backgroundColor: "white", width: "460px" }}>
                  <img src={line} alt="" />
                </div>

                <div>
                  <div
                    style={{
                      paddingBottom: "20px",
                      display: "flex",
                      backgroundColor: "white",
                      width: "460px",
                    }}
                  >
                    <div>
                      <img src={ellipse34} alt="" style={{ padding: "10px" }} />
                      <div style={{ paddingLeft: "10px" }}>
                        <Avatar
                          style={{
                            backgroundColor: "#1A344B",
                            width: "25px",
                            height: "25px",
                          }}
                        >
                          S
                        </Avatar>
                      </div>
                    </div>
                    <div style={{ textAlign: "start" }}>
                      <p>Keysha Rolon</p>
                      <p>uSA West Markets sales executive xYZCO</p>
                      <div
                        style={{
                          display: "flex",
                          height: "30px",
                          alignItems: "center",
                        }}
                      >
                        <img
                          src={rectangle200}
                          alt=""
                          style={{ height: "inherit" }}
                        />
                        <p style={{ fontSize: "medium" }}>
                          hi, keysha. we’d like to ask you a few more que....
                        </p>
                      </div>
                    </div>
                    <div style={{ width: "70px", display: "flex" }}>
                      <p style={{}}>5h ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* last box close */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
