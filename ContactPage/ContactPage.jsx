import "./ContactPage.css";
import { Link } from "react-router-dom";
import triangleup from "../icons/triangleup.svg";
import triangledown from "../icons/triangledown.svg";
import SearchBar from "../icons/searchBar.svg";
import WhiteTriangleUp from "../icons/whitetriangleup.svg";
import WhiteTriangleDown from "../icons/whitetriangledown.svg";
import GitHub from "../icons/github.svg";
import Linkedin from "../icons/linkedin.svg";
import Twitter from "../icons/twitter.svg";
import contactgithub from "../icons/contactgithub.svg";
import contactlinkedin from "../icons/contactlinkedin.svg";
import contacttwitter from "../icons/contacttwitter.svg";

function ContactPage(props) {
  return (
    <div className="ContactPage">
      <div className="projectHeaderContainer">
        <div className="projectHeaderArrowIndicators">
          <img src={triangleup} className="projectTriangleUpHeader" />
          <img src={triangledown} className="projectTriangleDownHeader" />
        </div>
        <div className="indexDropdownContenttablet">
          <Link className="bottomTexttablet" to="/">
            HOME
          </Link>
          <Link className="bottomTexttablet" to="/projects/">
            PORTFOLIO
          </Link>
          <Link className="bottomTexttablet" to="/projects/Contact/">
            CONTACT ME
          </Link>
        </div>
        <div className="indexDropDown">
          <img src={SearchBar} className="projectSearchBarHeader" />
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
      <div className="contactSocialNetworks">
        <a href="https://github.com/DimitriGugava" target="_blank">
          <img src={contactgithub} className="contactSocials" />
        </a>
        <a href="https://www.linkedin.com/in/dimitri-gugava/" target="_blank">
          <img src={contactlinkedin} className="contactSocials" />
        </a>
        <a href="https://twitter.com/DimitriMountain" target="_blank">
          <img src={contacttwitter} className="contactSocials" />
        </a>
      </div>
      <div className="homePageFirstLine"></div>

      <div className="contactTextBox">
        <h1 className="getInTouchText">Get in Touch</h1>

        <p className="contactLongText">
           I’d love to hear about what you’re working on and how I could help.
          I’m currently looking for a new role and am open to a wide range of
          opportunities. I’m a hard-working and positive person who will always
          approach each task with a sense of purpose and attention to detail.
          Please do feel free to check out my social network profiles below and
          get in touch. You can also contact me directly via email. 
          <h3 className="mailText">
            Mail: <Link>dimitrigugava@gmail.com</Link>
          </h3>
        </p>
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
}

export default ContactPage;
