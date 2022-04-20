import "./Projects.css";
import Projectimg from "../images/project_sc.png";

export default function Projects() {
  return (
    <div className="Projects">
      <h3>Projects</h3>
      <ul className="projectList">
        <li>
          <img className="projectImg" src={Projectimg} alt="projectImg" />
        </li>
        <li>
          <img className="projectImg" src={Projectimg} alt="projectImg" />
        </li>

        <li className="pleaseMove">
          <img className="projectImg" src={Projectimg} alt="projectImg" />
        </li>
        <li>
          <img className="projectImg" src={Projectimg} alt="projectImg" />
        </li>
      </ul>
    </div>
  );
}
