import "./Allprojectpage.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Allprojectpage = (props) => {
  console.log(props.info);
  return (
    <div className="allprojextmaindiv">
      <img
        src={
          process.env.PUBLIC_URL + props.info.projectimage.imagepreview.photo
        }
        alt="my photo"
        className="projectPhoto"
      />
      <div className="indexProjectContentBox">
        <div className="indexLineBetweenProject"></div>
        <h1 className="indexProjectTitle">{props.info.name}</h1>
        <p className="indexProjectDescription">{props.info.description}</p>
        <Link to={"/projects/" + props.info.id} className="indexViewProjectBox">
          GO TO PROJECT
        </Link>
      </div>
    </div>
  );
};

export default Allprojectpage;
