import { Link } from "react-router-dom";
import "./roadmap.scss";
const Roadmap = () => {
  return (
    <div className="roadmap">
      <div className="roadmap-main">
        <h3>Roadmap</h3>
        <Link className="view" to={"/RoadmapPage"}>
          View
        </Link>
      </div>
      <div className="roadmap-ul">
        <div className="roadmap-item">
          <div className="item-name">
            <div style={{ backgroundColor: "#F49F85" }} className="round"></div>{" "}
            <a href="/">Planned</a>
          </div>
          <span>2</span>
        </div>
        <div className="roadmap-item">
          <div className="item-name">
            <div style={{ backgroundColor: "#AD1FEA" }} className="round"></div>{" "}
            <a href="/">In-Progress</a>
          </div>
          <span>3</span>
        </div>
        <div className="roadmap-item">
          <div className="item-name">
            <div style={{ backgroundColor: "#62BCFA" }} className="round"></div>{" "}
            <a href="/">Live</a>
          </div>
          <span>1</span>
        </div>
      </div>
    </div>
  );
};
export default Roadmap;
