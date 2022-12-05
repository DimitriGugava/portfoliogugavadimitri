import "./App.css";
import HomePage from "./HomePage/HomePage";
import PortfolioIndex from "./PortfolioIndex/PortfolioIndex";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProjectPage from "./PortfolioIndex/ProjectPage/ProjectPage";
import ContactPage from "./ContactPage/ContactPage";
function App(props) {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path={"/projects"} element={<PortfolioIndex />} />
          <Route path={"/projects/:id"} element={<ProjectPage />} />
          <Route path={"/projects/Contact"} element={<ContactPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
