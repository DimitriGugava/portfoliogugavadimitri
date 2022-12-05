import "./PortfolioIndex.css";
import triangleup from "../icons/triangleup.svg";
import triangledown from "../icons/triangledown.svg";
import SearchBar from "../icons/searchBar.svg";
import homePageOpenningImage from "../icons/homePageOpenningImage.jpg";
import DownArros from "../icons/down-arrows.svg";
import MyPhoto from "../icons/myphoto.png";
import WhiteTriangleUp from "../icons/whitetriangleup.svg";
import WhiteTriangleDown from "../icons/whitetriangledown.svg";
import GitHub from "../icons/github.svg";
import Linkedin from "../icons/linkedin.svg";
import Twitter from "../icons/twitter.svg";
import data from "../data.json";
import { useEffect, useState } from "react";
import Allprojectpage from "../PortfolioIndex/AllProjectPage/Allprojectpage";
import { Link } from "react-router-dom";

const PortfolioIndex = (props) => {
  return (
    <div className="IndexContainer">
      <div className="indexHeaderContainer">
        <div className="indexHeaderArrowIndicators">
          <img src={triangleup} className="indexTriangleUpHeader" />
          <img src={triangledown} className="indexTriangleDownHeader" />
        </div>
        <div className="indexDropdownContenttabletdesktop">
          <Link className="bottomTexttabletdesktop" to="/">
            HOME
          </Link>
          <Link className="bottomTexttabletdesktop" to="/projects/">
            PORTFOLIO
          </Link>
          <Link className="bottomTexttabletdesktop" to="/projects/Contact/">
            CONTACT ME
          </Link>
        </div>
        <div className="indexDropDown">
          <img src={SearchBar} className="indexSearchBarHeader" />
          <div className="indexDropdownContent">
            <Link className="bottomText" to="/">
              HOME
            </Link>
            <Link className="bottomText" to="/projects/">
              PORTFOLIO
            </Link>
            <Link className="bottomText" to="/projects/Contact/">
              CONTACT ME
            </Link>
          </div>
        </div>
      </div>
      {data.projects.map((info) => {
        return <Allprojectpage info={info}></Allprojectpage>;
      })}
      <div className="bottomlongline"></div>
      <div className="indexContactMeContentBox">
        <h1 className="indexInterestedTogetherText">
          Interested in doing a project together?
        </h1>
        <Link className="indexContactMeBox" to="/projects/Contact/">
          CONTACT ME
        </Link>
      </div>

      <div className="indexBottomBox">
        <div className="indexBottomArrowsBox">
          <img src={WhiteTriangleUp} className="indexUpArrow" />
          <img src={WhiteTriangleDown} className="indexDownArrow" />
        </div>
        <div className="indexBottomTextBox">
          <Link className="indexBottomText">HOME</Link>
          <Link className="indexBottomText" to="/projects/">
            PORTFOLIO
          </Link>
          <Link className="indexBottomText" to="/projects/Contact/">
            CONTACT ME
          </Link>
        </div>
        <div className="indexSocialNetworkBox">
          <a href="https://github.com/DimitriGugava" target="_blank">
            <img src={GitHub} className="indexSocialNetwork" />
          </a>
          <a href="https://www.linkedin.com/in/dimitri-gugava/" target="_blank">
            <img src={Linkedin} className="indexSocialNetwork" />
          </a>
          <a href="https://twitter.com/DimitriMountain" target="_blank">
            <img src={Twitter} className="indexSocialNetwork" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioIndex;
