import React from "react";
import "./css_files/position.css";
import Header2 from "./header2";
import Button from "@material-ui/core/Button";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import ellipse12 from "./images/Ellipse 12.png";
import ellipse13 from "./images/Ellipse 13.png";
import ellipse14 from "./images/Ellipse 14.png";
import DeleteIcon from "@material-ui/icons/Delete";
import Sidebar from "./sidebar";

const Positions = () => {
  return (
    <div className="positionpage">
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex" }}>
          <Sidebar />
        </div>

        <div style={{ width: "-webkit-fill-available" }}>
          <Header2 />

          <div style={{ padding: "20px" }}>
            <div className="backgroundbox">
              <div className="firstbox22">
                <div className="buttonMainDiv">
                  <div style={{ display: "flex" }}>
                    <div>
                      <Button
                        style={{
                          backgroundColor: "#84AC04",
                          textAlign: "center",
                          display: "flex",
                          height: "30px",
                          borderRadius: "14.5px",
                          paddingLeft: "15px",
                          paddingRight: "15px",
                          color: "white",
                        }}
                      >
                        <p>Filter</p>
                      </Button>
                    </div>
                    <div style={{ paddingLeft: "10px" }}>
                      <Button
                        style={{
                          backgroundColor: "white",
                          textAlign: "center",
                          display: "flex",
                          height: "30px",
                          borderRadius: "14.5px",
                          color: "black",
                        }}
                      >
                        <p>All Position</p>
                      </Button>
                    </div>
                  </div>

                  <div style={{ display: "flex" }}>
                    <div style={{ paddingRight: "10px" }}>
                      <Button
                        style={{
                          backgroundColor: "#84AC04",
                          textAlign: "center",
                          display: "flex",
                          height: "30px",
                          borderRadius: "14.5px",
                          color: "white",
                        }}
                      >
                        <p>All Position</p>
                      </Button>
                    </div>

                    <div style={{ paddingRight: "10px" }}>
                      <Button
                        style={{
                          backgroundColor: "#84AC04",
                          textAlign: "center",
                          display: "flex",
                          height: "30px",
                          borderRadius: "14.5px",
                          color: "white",
                        }}
                      >
                        <p>All Position</p>
                      </Button>
                    </div>

                    <div style={{ paddingRight: "10px" }}>
                      <Button
                        style={{
                          backgroundColor: "#84AC04",
                          textAlign: "center",
                          display: "flex",
                          height: "30px",
                          borderRadius: "14.5px",
                          color: "white",
                        }}
                      >
                        <p>All Position</p>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ paddingTop: "10px" }}>
                <div className="secondbox">
                  <div className="secondbox1">
                    <FiberManualRecordIcon style={{ color: "#848383" }} />
                    <p>
                      Hiring Team <span>|</span>
                    </p>
                    <p style={{ paddingRight: "88px", paddingLeft: "106px" }}>
                      Name <span>|</span>
                    </p>
                    <p>
                      Location <span>|</span>
                    </p>
                    <p>
                      Type <span>|</span>
                    </p>
                    <p>
                      Candidates <span>|</span>
                    </p>
                    <p>
                      Age <span>|</span>
                    </p>
                    <p>Work Time</p>
                  </div>
                </div>
              </div>

              <div style={{ paddingTop: "30px", paddingRight: "10px" }}>
                <div style={{ paddingTop: "10px" }}>
                  <div className="thirdbox">
                    <div>
                      <img src={ellipse12} alt="" />
                      <img src={ellipse13} alt="" />
                      <img src={ellipse14} alt="" />
                    </div>
                    <p>activities manager - chicago</p>
                    <p>chicago-USA</p>
                    <p>self</p>
                    <p>13</p>
                    <p>18y</p>
                    <p>24h ago</p>
                    <DeleteIcon />
                  </div>
                </div>

                <div style={{ paddingTop: "10px" }}>
                  <div className="thirdbox">
                    <div>
                      <img src={ellipse12} alt="" />
                      <img src={ellipse13} alt="" />
                      <img src={ellipse14} alt="" />
                    </div>
                    <p>activities manager - chicago</p>
                    <p>chicago-USA</p>
                    <p>self</p>
                    <p>13</p>
                    <p>25y</p>
                    <p>24h ago</p>
                    <DeleteIcon />
                  </div>
                </div>

                <div style={{ paddingTop: "10px" }}>
                  <div className="thirdbox">
                    <div>
                      <img src={ellipse12} alt="" />
                      <img src={ellipse13} alt="" />
                      <img src={ellipse14} alt="" />
                    </div>
                    <p>activities manager - chicago</p>
                    <p>chicago-USA</p>
                    <p>self</p>
                    <p>13</p>
                    <p>18y</p>
                    <p>24h ago</p>
                    <DeleteIcon />
                  </div>
                </div>

                <div style={{ paddingTop: "10px" }}>
                  <div className="thirdbox5">
                    <div
                      style={{
                        width: "7px",
                        height: "76px",
                        backgroundColor: "#B9BBFD",
                        borderRadius: "8px 0px 0px 8px",
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <div style={{ paddingLeft: "64px", color: "#B9BBFD" }}>
                        <FiberManualRecordIcon />
                      </div>
                    </div>

                    <div>
                      <img src={ellipse12} alt="" />
                      <img src={ellipse13} alt="" />
                      <img src={ellipse14} alt="" />
                    </div>
                    <p>activities manager - chicago</p>
                    <p>chicago-USA</p>
                    <p>self</p>
                    <p>13</p>
                    <p>19y</p>
                    <p>24h ago</p>
                    <DeleteIcon />
                  </div>
                </div>

                <div style={{ paddingTop: "10px" }}>
                  <div className="thirdbox5">
                    <div
                      style={{
                        width: "7px",
                        height: "76px",
                        backgroundColor: "#FC3F33",
                        borderRadius: "8px 0px 0px 8px",
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <div style={{ paddingLeft: "64px", color: "#FC3F33" }}>
                        <FiberManualRecordIcon />
                      </div>
                    </div>
                    <div>
                      <img src={ellipse12} alt="" />
                      <img src={ellipse13} alt="" />
                      <img src={ellipse14} alt="" />
                    </div>
                    <p>activities manager - chicago</p>
                    <p>chicago-USA</p>
                    <p>self</p>
                    <p>13</p>
                    <p>22y</p>
                    <p>24h ago</p>
                    <DeleteIcon />
                  </div>
                </div>

                <div style={{ paddingTop: "10px" }}>
                  <div className="thirdbox5">
                    <div
                      style={{
                        width: "7px",
                        height: "76px",
                        backgroundColor: "#84AC04",
                        borderRadius: "8px 0px 0px 8px",
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <div style={{ paddingLeft: "64px", color: "#84AC04" }}>
                        <FiberManualRecordIcon />
                      </div>
                    </div>
                    <div>
                      <img src={ellipse12} alt="" />
                      <img src={ellipse13} alt="" />
                      <img src={ellipse14} alt="" />
                    </div>
                    <p>activities manager - chicago</p>
                    <p>chicago-USA</p>
                    <p>self</p>
                    <p>13</p>
                    <p>21y</p>
                    <p>24h ago</p>
                    <DeleteIcon />
                  </div>
                </div>

                <div style={{ paddingTop: "10px" }}>
                  <div className="thirdbox">
                    <div>
                      <img src={ellipse12} alt="" />
                      <img src={ellipse13} alt="" />
                      <img src={ellipse14} alt="" />
                    </div>
                    <p>activities manager - chicago</p>
                    <p>chicago-USA</p>
                    <p>self</p>
                    <p>13</p>
                    <p>18y</p>
                    <p>24h ago</p>
                    <DeleteIcon />
                  </div>
                </div>

                <div style={{ paddingTop: "10px" }}>
                  <div className="thirdbox">
                    <div>
                      <img src={ellipse12} alt="" />
                      <img src={ellipse13} alt="" />
                      <img src={ellipse14} alt="" />
                    </div>
                    <p>activities manager - chicago</p>
                    <p>chicago-USA</p>
                    <p>self</p>
                    <p>13</p>
                    <p>24y</p>
                    <p>24h ago</p>
                    <DeleteIcon />
                  </div>
                </div>

                <div style={{ paddingTop: "10px" }}>
                  <div className="thirdbox">
                    <div>
                      <img src={ellipse12} alt="" />
                      <img src={ellipse13} alt="" />
                      <img src={ellipse14} alt="" />
                    </div>
                    <p>activities manager - chicago</p>
                    <p>chicago-USA</p>
                    <p>self</p>
                    <p>13</p>
                    <p>19y</p>
                    <p>24h ago</p>
                    <DeleteIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Positions;
