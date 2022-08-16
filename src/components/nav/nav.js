import "./nav.scss"
import icon from "../../assets/img/bulb.png"
import MainBtn from "../main-btn/main-btn"
const Nav = () => {
    return (
        <div className="nav">
            <div className="nav__left-page">
            <div className="site-title">
            <img src={icon} alt="Icon" />
            <h3>6 Suggestions</h3>
            </div>
            <div className="section-form">
            <label htmlFor="sortBy" className="label-form">Sort By :</label>
            <select className="nav-section" id="sortBy">
                <option className="nav-section__value" value="1">Most upvotes</option>
                <option className="nav-section__value" value="2">Least upvotes</option>
                <option className="nav-section__value" value="3">Most comments</option>
                <option className="nav-section__value" value="3">Least comments</option>
            </select>
            </div>
            </div>
            
                <MainBtn to="/AddCard">
                    + Add Feedback
                </MainBtn>
            
        </div>
    )
}
export default Nav;