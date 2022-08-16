import { Link } from "react-router-dom"
import Container from "../../components/container/container"
import MainBtn from "../../components/main-btn/main-btn"
import "./roadmap-page.scss"

const RoadmapPage = () => {
    return (
        <Container className="roadmap-page__container">
            <div className="roadmap-nav">
                <div className="roadmap-nav__title">
                    <Link className="goback" to={"/"} >  {"<"}  Go Back</Link>
                    <h3>Roadmap</h3>
                </div>
                <MainBtn to={"/AddCard"}>+ Add Feedback</MainBtn>
            </div>
            <div className="roadmap-list">
                <div className="roadmap-child">
                    <h4>Planned (2)</h4>
                    <p>Ideas prioritized for research</p>
                    <div className="roadmap-box">
                    </div>
                </div>
                <div className="roadmap-child">
                    <h4>In-Progress (3)</h4>
                    <p>Currently being developed</p>
                </div>
                <div className="roadmap-child">
                    <h4>Live (1)</h4>
                    <p>Released features</p>
                </div>
            </div>
        </Container>
    )
    }
    export default RoadmapPage