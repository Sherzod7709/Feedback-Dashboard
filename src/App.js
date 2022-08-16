import Home from "./pages/home/home";
import Feedback from "../src/pages/feedbackCard/feedbackCard";
import AddCard from "./components/add-card/add-card";
import { Route, Routes } from "react-router-dom";
import "./assets/scss/main.scss";
import Data from "../src/data/data";
import RoadmapPage from "./pages/roadmap-page/roadmap-page";
import { useState } from "react";
import EditCard from "./pages/edit-card/edit-card";
import { createContext } from "react";

export const CardContex = createContext();
const App = () => {
  const [feedbacks, setFeedbacks] = useState(Data);
  return (
    <CardContex.Provider value={{ feedbacks, setFeedbacks }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AddCard" element={<AddCard />} />
        <Route path="/feedback/:id" element={<Feedback />}></Route>
        <Route path="/RoadmapPage" element={<RoadmapPage />}></Route>
        <Route path="/editcard" element={<EditCard />}></Route>
      </Routes>
    </CardContex.Provider>
  );
};

export default App;
