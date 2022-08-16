import "./gap-page.scss"
import Photo from "../../assets/img/group16.png"
import MainBtn from "../main-btn/main-btn"
const Gap = () =>{
    return (
        <div className="gap-page">
            <img src={Photo} alt="" />
            <h2>There is no feedback yet.</h2>
            <p className="gap-page__text">Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.</p>
            <MainBtn to={"/AddCard"}>+ Add Feedback</MainBtn>
        </div>
    )
}
export default Gap