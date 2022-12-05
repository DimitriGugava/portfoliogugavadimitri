import { Navigate, Router, useParams } from "react-router-dom";
import "./ProjectPage.css";
import data from "../../data.json";
import triangleup from "../../icons/triangleup.svg";
import triangledown from "../../icons/triangledown.svg";
import SearchBar from "../../icons/searchBar.svg";
import WhiteTriangleDown from "../../icons/whitetriangledown.svg";
import WhiteTriangleUp from "../../icons/whitetriangleup.svg";
import GitHub from "../../icons/github.svg";
import Linkedin from "../../icons/linkedin.svg";
import Twitter from "../../icons/twitter.svg";
import ArrowLeft from "../../icons/arrow-left.svg";
import ArrowRight from "../../icons/arrow-right.svg";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

const ProjectPage = () => {
  const { id } = useParams();
  const projects = data.projects;

  const navigate = useNavigate();
  const project = projects.find((element) => element.id === +id);

  const projectIndex = projects.findIndex((element) => element.id === +id);
  console.log(projectIndex + 1);
  const nextProject = projects[projectIndex + 1];
  const previousProject = projects[projectIndex - 1];

  const changeNextProject = () => {
    navigate("/projects/" + nextProject.id);
  };
  const PreviousProjectPage = () => {
    navigate("/projects/" + previousProject.id);
  };

  // const linkForPage = "https://single-page-design-rosy.vercel.app/";
  // const visitLivePage = () => {
  //   window.open(linkForPage);
  // };

  return (
    <div className="projectContainer">
      <div className="projectHeaderContainer">
        <div className="projectHeaderArrowIndicators">
          <img src={triangleup} className="projectTriangleUpHeader" />
          <img src={triangledown} className="projectTriangleDownHeader" />
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
          <img src={SearchBar} className="projectSearchBarHeaderProject" />
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

      <img
        src={process.env.PUBLIC_URL + project.projectimage.imagepreview.photo}
        alt="my photo"
        className="projePagectPhoto"
      />
      <div className="indexLineBetweenProjectProjectPage"></div>
      <div className="forDesktopProject">
        <div className="indexProjectContentBoxProjectPage">
          <h1 className="indexProjectTitleProjectPage">{project.name}</h1>
          <p className="indexProjectDescriptionProjectPage">
            {project.description}
          </p>
          <a
            className="indexViewProjectBoxProjectPage"
            href={project.livelink}
            target="_blank"
          >
            Visit Project's Live Page:
          </a>
        </div>
        <div className="indexBetweenProjectslineProjectPage"></div>
        <div className="projectBackgroundBox">
          <h1 className="projectBackground">Project Background</h1>
          <p className="projectBackgroundText">{project.projectbackground}</p>
        </div>
        <h1 className="staticPreview">Static Preview</h1>
        <img
          src={
            process.env.PUBLIC_URL + project.projectimage.imagepreview.phototwo
          }
          className="staticPhoto"
        />
      </div>
      <div className="changeBoxVerticalLineTop"></div>
      <div className="changeBoxVerticalLineBottom"></div>
      <div className="changePagesBox">
        <div className="boxOne">
          <img
            src={ArrowLeft}
            className="changeBoxArrowLeft"
            onClick={PreviousProjectPage}
          />
          <h1 className="changePageHeader" onClick={PreviousProjectPage}>
            {project.PreviousProject}
          </h1>
          <p
            className="changePagePreviousNextText"
            onClick={PreviousProjectPage}
          >
            Previous Project
          </p>
        </div>
        <div className="changeBoxHorizontalLine"></div>
        <div className="boxTwo">
          <img
            src={ArrowRight}
            className="changeBoxArrowRight"
            onClick={changeNextProject}
          />

          <h1 className="changePageHeaderRight" onClick={changeNextProject}>
            {project.NextProject}
          </h1>
          <p
            className="changePagePreviousNextTextRight"
            onClick={changeNextProject}
          >
            Next Project
          </p>
        </div>
      </div>
      <div className="changeBoxVerticalLineBottom"></div>
      <div className="changeBoxVerticalLineBottom"></div>
      <div className="projectContactMeContentBox">
        <h1 className="projectInterestedTogetherText">
          Interested in doing a project together?
        </h1>
        <Link className="projectContactMeBox" to="/projects/Contact/">
          CONTACT ME
        </Link>
      </div>
      <div className="projectBottomBox">
        <div className="projectBottomArrowsBox">
          <img src={WhiteTriangleUp} className="projectUpArrow" />
          <img src={WhiteTriangleDown} className="projectDownArrow" />
        </div>
        <div className="projectBottomTextBox">
          <Link className="projectBottomText" to="/">
            HOME
          </Link>

          <Link className="projectBottomText" to="/projects/">
            PORTFOLIO
          </Link>
          <Link className="projectBottomText" to="/projects/Contact/">
            CONTACT ME
          </Link>
        </div>
        <div className="projectSocialNetworkBox">
          <a href="https://github.com/DimitriGugava" target="_blank">
            <img src={GitHub} className="projectSocialNetwork" />
          </a>
          <a href="https://www.linkedin.com/in/dimitri-gugava/" target="_blank">
            <img src={Linkedin} className="projectSocialNetwork" />
          </a>
          <a href="https://twitter.com/DimitriMountain" target="_blank">
            <img src={Twitter} className="projectSocialNetwork" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
