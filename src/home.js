import React from "react";
import "./css_files/home.css";
import Header from "./header";
import job from "./images/job-search 1.jpg";
import rectangal from "./images/Rectangle 262.png";
import AdjustIcon from "@material-ui/icons/Adjust";
import candidate from "./images/candidates 1.png";
import teamleader from "./images/team-leader 1.png"
import hire from "./images/hire 1.png"
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
          <div  className="underbox">
            <h1>1</h1>
            <h2>New Candidates</h2>
          </div>
          <AdjustIcon />
        </div>

        <div className="firstbox">
            <img src={teamleader} alt=""/>
            <img src={rectangal} alt="" />
            <div className="underbox">
                <h1>2</h1>
                <h2>Candidates Progressing</h2>
            </div>
            <AdjustIcon />
        </div>

        <div className="firstbox">
            <img src={hire} alt=""/>
            <img src={rectangal} alt="" />
            <div className="underbox">
                <h1>0</h1>
                <h2>Candidates Hired</h2>
            </div>
            <AdjustIcon />
        </div>


      </div>
    </div>
  );
};

export default Home;
