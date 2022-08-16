import Mentor from "../../components/mentor/mentor";
import Filter from "../../components/filter-type/filter-type";
import Roadmap from "../../components/roadmap/roadmap";
import Container from "../../components/container/container";
import Page from "../page2/page";
import "./home.scss";
// import { useContext } from 'react'
// import {CardContex} from "../../App"

const Home = () => {
  //const {feedbacks} = useContext(CardContex)
  return (
    <div className="home">
      <Container className="home__container">
        <div className="left-home">
          <Mentor></Mentor>
          <Filter></Filter>
          <Roadmap></Roadmap>
        </div>
        <div>
          <Page />
        </div>
      </Container>
    </div>
  );
};
export default Home;
