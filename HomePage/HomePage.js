import "./HomePage.css";

import triangleup from "../icons/triangleup.svg";
import triangledown from "../icons/triangledown.svg";
import SearchBar from "../icons/searchBar.svg";
import homePageOpenningImage from "../icons/homePageOpenningImage.jpg";
import DownArrwos from "../icons/down-arrows.svg";
import MyPhoto from "../icons/myphoto.png";
import WhiteTriangleUp from "../icons/whitetriangleup.svg";
import WhiteTriangleDown from "../icons/whitetriangledown.svg";
import GitHub from "../icons/github.svg";
import Linkedin from "../icons/linkedin.svg";
import Twitter from "../icons/twitter.svg";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useRef } from "react";
import meme from "../icons/meme.png";
import homepagephoto from "../icons/homepagephoto.jpg";
import melake from "../icons/melake.JPEG";

const HomePage = () => {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="homePageContainer">
      <div className="homePageHeaderContainer">
        <div className="homePageHeaderArrowIndicators">
          <img src={triangleup} className="triangleUpHeader" />
          <img src={triangledown} className="triangleDownHeader" />
        </div>
        <div className="tabletdesktopheader">
          <Link className="tabletheaderhome" to="/">
            HOME
          </Link>
          <Link className="tabletheaderhome" to="/projects/">
            PORTFOLIO
          </Link>
          <Link className="tabletheaderhome" to="/projects/Contact/">
            CONTACT ME
          </Link>
        </div>
        <div className="dropDown">
          <img src={SearchBar} className="searchBarHeader" />
          <div className="dropdownContent">
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
      <img src={homePageOpenningImage} className="homePageOpenningImage" />
      <img src={homepagephoto} className="homepagephoto" />
      <img src={meme} className="meme" />
      <div className="heyDimitriBox">
        <h1 className="homePageHeaderIntroText">
          Hey, I’m Dimitri Gugava and I love building beautiful websites
        </h1>
        <div className="homePageAboutMeBox" onClick={handleClick}>
          <img
            src={DownArrwos}
            alt="downarrowsbutton"
            className="downArrowsShape"
          />

          <h1 className="aboutMeText">ABOUT ME</h1>
        </div>
      </div>

      <div className="myphotoandaboutme">
        <img src={MyPhoto} alt="my photo" className="myPhoto" />
        <img src={melake} alt="my photo" className="myPhototabletdesktop" />

        <div className="homePageLongTextAboutMeBox" ref={ref}>
          <div className="myphotoandaboutmetextbox">
            <h1 className="AboutMeLongTextHeader">About Me</h1>
            <p className="aboutMeLongText">
              I’m a junior front-end developer from Tbilisi, Georgia. Aspiring
              to become a full-stack developer.  Currently, I'm looking for a
              new role as a front-end or full-stack developer, either remotely
              or on-site anywhere in the world.
              <ul>
                <p>
                  <u>Skills I pose:</u>
                </p>
                <b>
                  HTML, CSS, JavaScript, React, Git, GitHub, TailwindCSS,
                  Figma,Bootstrap,Node JS, PHP, Blender, Python (Basics).
                </b>
              </ul>
            </p>
            <Link className="goToPorfolioBox" to="/projects/">
              GO TO PORTFOLIO
            </Link>
          </div>
          <div className="homePagesecondLine"></div>
        </div>
      </div>

      <div className="homePageContactMeBox">
        <h1 className="homePageInterestedText">
          Interested in doing a project together?
        </h1>
        <Link className="contactMeBox" to="/projects/Contact/">
          CONTACT ME
        </Link>
      </div>
      <div className="homePageBottomBox">
        <div className="homePageBottomArrowsBox">
          <img src={WhiteTriangleUp} className="upArrow" />
          <img src={WhiteTriangleDown} className="downArrow" />
        </div>
        <div className="bottomTextBox">
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
        <div className="socialNetworkBox">
          <a href="https://github.com/DimitriGugava" target="_blank">
            <img src={GitHub} className="socialNetwork" />
          </a>
          <a href="https://www.linkedin.com/in/dimitri-gugava/" target="_blank">
            <img src={Linkedin} className="socialNetwork" />
          </a>
          <a href="https://twitter.com/DimitriMountain" target="_blank">
            <img src={Twitter} className="socialNetwork" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
